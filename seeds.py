from app import app, db
from models.user import User, UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    mike, errors = user_schema.load({
        'username': 'mike',
        'email': 'mike',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)
    db.session.add(mike)

    db.session.commit()
