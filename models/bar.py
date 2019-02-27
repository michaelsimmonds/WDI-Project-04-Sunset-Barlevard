from app import db, ma
# from marshmallow import fields
from .base import BaseModel, BaseSchema

# crawls_bars = db.Table('crawls_bars',
#     db.Column('crawl_id', db.Integer, db.ForeignKey('crawls.id'), primary_key=True),
#     db.Column('bar_id', db.Integer, db.ForeignKey('bars.id'), primary_key=True),
#     db.Column('order', db.Integer)
# )



class Bar(db.Model, BaseModel):

    __tablename__ = 'bars'

    name = db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    terrace = db.Column(db.Boolean)
    description = db.Column(db.String(400), nullable=False)


class BarSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Bar
