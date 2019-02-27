from flask import Blueprint, request, jsonify, g # Blueprint is a mini router
from models.bar import Bar, BarSchema
from lib.secure_route import secure_route

api = Blueprint('bars', __name__)

bars_schema = BarSchema(many=True) #the exclude here only excludes on the index route, as we would probably not want to see all the victims there. Better to do this on the back end rather than the front end, as it means we dont have to send surplus data to the front end, which costs money.
bar_schema = BarSchema()

@api.route('/bars', methods=['GET'])
# @secure_route
def index():
    bars = Bar.query.all()
    return bars_schema.jsonify(bars)

@api.route('/bars/<int:bar_id>', methods=['GET'])
# @secure_route
def show(bar_id):
    bar = Bar.query.get(bar_id)
    return bar_schema.jsonify(bar)

@api.route('/bars', methods=['POST'])
# @secure_route
def create():
    bar, errors = bar_schema.load(request.get_json())
    # bar.creator = g.current_user #adds the creator to the created bar
    if errors:
        return jsonify(errors), 422 # this jsonify is a flask method. it turns dict into json
    bar.save()
    return bar_schema.jsonify(bar) # this is marshmallow jsonify. it jsonifies the bar object


@api.route('/bars/<int:bar_id>', methods=['PUT'])
def update(bar_id):
    bar = Bar.query.get(bar_id)
    # if bar.creator != g.current_user:  # if the creator isnt the current user they cannot modify
    #     return jsonify({'message': 'Unuthorized'}), 401
    bar, errors = bar_schema.load(request.get_json(), instance=bar)
    if errors:
        return jsonify(errors), 422 # this jsonify is a flask method. it turns dict into json
    bar.save()
    return bar_schema.jsonify(bar) # this is marshmallow jsonify. it jsonifies the bar object



@api.route('/bars/<int:bar_id>', methods=['DELETE'])
def delete(bar_id):
    bar = Bar.query.get(bar_id)
    if bar.creator != g.current_user:  # if the creator isnt the current user they cannot modify
        return jsonify({'message': 'Unuthorized'}), 401
    bar.remove()
    return '', 204
