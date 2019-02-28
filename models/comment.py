from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# from .crawl import Crawl, CrawlSchema

class Comment(db.Model, BaseModel):

    __tabelname__ = 'comments'

    content = db.Column(db.String(200), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    author = db.relationship('User', backref='sent_comments') # foreign_keys lets us have keys from same table
    crawl_receiver_id = db.Column(db.Integer, db.ForeignKey('crawls.id'))
    crawl_receiver = db.relationship('Crawl', backref='received_comments')


class CommentSchema(ma.ModelSchema, BaseSchema):

    author = fields.Nested('UserSchema', only=('username', 'created_at'))
    # crawl = fields.Nested('CrawlSchema')

    class Meta:
        model = Comment
