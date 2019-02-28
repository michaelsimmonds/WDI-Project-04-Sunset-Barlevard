from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema

class Stop(db.Model):

    __tablename__ = 'stops'

    id = db.Column(db.Integer, primary_key=True)
    crawl_id = db.Column(db.Integer, db.ForeignKey('crawls.id'))
    bar_id = db.Column(db.Integer, db.ForeignKey('bars.id'))
    bar = db.relationship('Bar')
    order = db.Column(db.Integer, nullable=False)

    def save(self):

        db.session.add(self)
        db.session.commit()

class StopSchema(ma.ModelSchema):

    bar = fields.Nested('BarSchema')

    class Meta:
        model = Stop


class Crawl(db.Model, BaseModel):

    __tablename__ = 'crawls'

    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_crawls')
    stops = db.relationship('Stop', backref='crawls', order_by=Stop.order)


class CrawlSchema(ma.ModelSchema, BaseSchema):

    creator = fields.Nested('UserSchema', only=('username', ))
    stops = fields.Nested('StopSchema', many=True)
    comments = fields.Nested('CommentSchema', many=True, exclude=('crawl',))

    class Meta:
        model = Crawl

        exclude = ('crawls', )



class Comment(db.Model, BaseModel):

    __tabelname__ = 'comments'

    content = db.Column(db.String(200), nullable=False)
    crawl_id = db.Column(db.Integer, db.ForeignKey('crawls.id'))
    crawl = db.relationship('Crawl', backref='comments')
    #below is how to get author on comments posted
    # author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # author = db.relationship('User', backref='sent_comments') # foreign_keys lets us have keys from same table


class CommentSchema(ma.ModelSchema, BaseSchema):

    # author = fields.Nested('UserSchema', only=('username', 'created_at'))

    class Meta:
        model = Comment
