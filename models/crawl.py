from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Crawl(db.Model, BaseModel):

    __tablename__ = 'crawls'

    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(400), nullable=False)

class CrawlSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Crawl
