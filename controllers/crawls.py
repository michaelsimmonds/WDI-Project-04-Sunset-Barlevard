from flask import Blueprint, request, jsonify, g # Blueprint is a mini router
# from models.crawl import Crawl, CrawlSchema, Stop, StopSchema

from models.comment import Comment, CommentSchema

from lib.secure_route import secure_route
from app import db

api = Blueprint('crawls', __name__)

crawls_schema = CrawlSchema(many=True) #the exclude here only excludes on the index route, as we would probably not want to see all the victims there. Better to do this on the back end rather than the front end, as it means we dont have to send surplus data to the front end, which costs money.
crawl_schema = CrawlSchema()

stops_schema = StopSchema(many=True)
stop_schema = StopSchema()

comments_schema = CommentSchema(many=True)
comment_schema = CommentSchema()

@api.route('/crawls', methods=['GET'])
# @secure_route
def index():
    crawls = Crawl.query.all()
    return crawls_schema.jsonify(crawls)

@api.route('/crawls/<int:crawl_id>', methods=['GET'])
# @secure_route
def show(crawl_id):
    crawl = Crawl.query.get(crawl_id)
    return crawl_schema.jsonify(crawl)

@api.route('/crawls', methods=['POST'])
@secure_route
def create():
    crawl, errors = crawl_schema.load(request.get_json())
    crawl.creator = g.current_user #adds the creator to the created crawl
    if errors:
        return jsonify(errors), 422 # this jsonify is a flask method. it turns dict into json
    crawl.save()
    return crawl_schema.jsonify(crawl) # this is marshmallow jsonify. it jsonifies the crawl object


@api.route('/crawls/<int:crawl_id>', methods=['PUT'])
@secure_route
def update(crawl_id):
    crawl = Crawl.query.get(crawl_id)
    if crawl.creator != g.current_user:  # if the creator isnt the current user they cannot modify
        return jsonify({'message': 'Unuthorized'}), 401
    crawl, errors = crawl_schema.load(request.get_json(), instance=crawl)
    if errors:
        return jsonify(errors), 422 # this jsonify is a flask method. it turns dict into json
    crawl.save()
    return crawl_schema.jsonify(crawl) # this is marshmallow jsonify. it jsonifies the crawl object



@api.route('/crawls/<int:crawl_id>', methods=['DELETE'])
@secure_route
def delete(crawl_id):
    crawl = Crawl.query.get(crawl_id)
    # if crawl.creator != g.current_user:  # if the creator isnt the current user they cannot modify
    #     return jsonify({'message': 'Unuthorized'}), 401
    crawl.remove()
    return '', 204


########################### COMMENTS ##########################################

@api.route('/crawls/<int:crawl_id>/comments', methods=['POST'])
@secure_route
def create_comment(crawl_id):
    comment, errors = comment_schema.load(request.get_json())
    comment.author = g.current_user
    comment.crawl_receiver = Crawl.query.get(crawl_id)

    if errors:
        return jsonify(errors), 422

    comment.save()

    return comment_schema.jsonify(comment)









############################ STOPS ON CRAWLS ###################################
@api.route('/crawls/<int:crawl_id>/bars/<int:bar_id>/add', methods=['POST'])
def create_stop(crawl_id, bar_id):

    data = request.get_json() # this is the user putting in order

    stop = Stop(crawl_id=crawl_id, bar_id=bar_id, order=data['order'])
    db.session.add(stop)
    db.session.commit()

    crawl = Crawl.query.get(crawl_id)

    return crawl_schema.jsonify(crawl), 201


@api.route('/crawls/<int:crawl_id>/stops/<int:stop_id>', methods=['DELETE'])
def delete_stop(crawl_id, stop_id):
    stop = Stop.query.get(stop_id)
    db.session.delete(stop)
    db.session.commit()
    return '', 204
