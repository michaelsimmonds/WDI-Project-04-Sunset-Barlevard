from app import db, ma
from .base import BaseModel, BaseSchema

class Bar(db.Model, BaseModel):

    __tablename__ = 'bars'

    name = db.Column(db.String(40), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    terrace = db.Column(db.Boolean)
    description = db.Column(db.String(400), nullable=False)
    hero = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(20), nullable=False)

class BarSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Bar
