from app import app, db
from models.user import User, UserSchema
from models.bar import Bar, BarSchema
from models.crawl import Crawl, CrawlSchema

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

    east_end = Crawl(
        name='East End Crawl',
        description='Tour of the seven wonders of the East End'
    )
    db.session.add(east_end)

    db.session.commit()
