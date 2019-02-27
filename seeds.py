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

# ======================================================BARS===========================================================

    jujus = Bar(
    	name='Jujus',
    	address='Ely\'s Yard, 15 Hanbury St, London E1 6QR',
    	lat=51.520886,
    	lng=-0.073487,
    	terrace=True,
    	description='We go all the time on Firdays'
    )
    db.session.add(jujus)

    the_culpeper = Bar(
    	name='The Culpeper',
    	address='40 Commercial St, London E1 6LP',
    	lat=51.5168921,
    	lng=-0.0730285,
    	terrace=True,
    	description='Small but great roofterrace'
    )
    db.session.add(the_culpeper)

    discount_suit_company = Bar(
    	name='Discount Suit Company',
    	address='29 Wentworth St, London E1 7TB',
    	lat=51.5166773,
    	lng=0.0774967,
    	terrace=False,
    	description='Basement no light'
    )

    db.session.add(discount_suit_company)

# =====================================================CRAWLS==========================================================

    east_end = Crawl(
        name='East End Crawl',
        description='Tour of the seven wonders of the East End',
        bars=[jujus, the_culpeper, discount_suit_company],
        creator=mike
    )
    db.session.add(east_end)

    db.session.commit()
