from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from .user import User, UserSchema

favourites = db.Table(
    'favourites',
    db.Column('crawl_id', db.Integer, db.ForeignKey('crawls.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

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
    description = db.Column(db.String(1300), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_crawls')
    stops = db.relationship('Stop', backref='crawls', order_by=Stop.order)
    favourited_by = db.relationship('User', secondary=favourites, backref='favourites')

class CrawlSchema(ma.ModelSchema, BaseSchema):

    creator = fields.Nested('UserSchema', only=(['username', 'image', 'id']))
    stops = fields.Nested('StopSchema', many=True)
    comments = fields.Nested('CommentSchema', many=True, exclude=('crawl'))
    favourited_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Crawl

        exclude = ('crawls', )


class Comment(db.Model, BaseModel):

    __tabelname__ = 'comments'

    content = db.Column(db.String(200), nullable=False)
    crawl_id = db.Column(db.Integer, db.ForeignKey('crawls.id'))
    crawl = db.relationship('Crawl', backref='comments')
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    author = db.relationship('User', backref='comments')


class CommentSchema(ma.ModelSchema, BaseSchema):

    author = fields.Nested('UserSchema', only=('username'))

    class Meta:
        model = Comment
