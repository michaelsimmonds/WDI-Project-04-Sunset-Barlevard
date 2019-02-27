from app import app, db
from models.user import User, UserSchema
from models.bar import Bar, BarSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    mike, errors = user_schema.load({
        'username': 'mike',
        'email': 'mike',
        'bio': 'Strange',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)
    db.session.add(mike)

    jujus = Bar(
    	name='Jujus',
    	address='Ely\'s Yard, 15 Hanbury St, London E1 6QR',
    	lat=51.520886,
    	lng=-0.073487,
    	terrace=True,
    	description='We go all the time on Firdays'
    )
    db.session.add(jujus)

    db.session.commit()
