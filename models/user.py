from datetime import datetime, timedelta
import jwt
from config.environment import secret
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import validates_schema, ValidationError, fields, validate
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(128), nullable=False, unique=True)
    bio = db.Column(db.String(500), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    @hybrid_property
    def password(self):
        pass

    # function must be named after hybrid_property
    @password.setter
    def password(self, plaintext):
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self.password_hash, plaintext)

    def generate_token(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf-8')

        return token


class UserSchema(ma.ModelSchema, BaseSchema):

    @validates_schema
    def check_passwords_match(self, data):
        if data.get('password') != data.get('password_confirmation'):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    password = fields.String(required=True, validate=[validate.Length(min=8, max=50)])
    password_confirmation = fields.String(required=True)

    created_crawls = fields.Nested('CrawlSchema', many=True)

    class Meta:
        model = User
        exclude = ('password_hash',)
        load_only = ('password', 'password_confirmation') # would never show password on load, only when dumping data
