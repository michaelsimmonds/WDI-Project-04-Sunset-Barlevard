from app import app, db
from models.user import User, UserSchema
from models.bar import Bar, BarSchema
from models.crawl import Crawl, CrawlSchema, Stop, Comment, CommentSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

################ USERS ########################

    mike, errors = user_schema.load({
        'username': 'mikethebest',
        'email': 'mike@gmail.com',
        'bio': 'I have absolutely no pleasure in the stimulants in which I sometimes so madly indulge. It has not been in the pursuit of pleasure that I have periled life and reputation and reason. It has been the desperate attempt to escape from torturing memories, from a sense of insupportable loneliness and a dread of some strange impending doom.',
        'password': 'password',
        'password_confirmation': 'password',
        'image': 'http://adam1.scripts.mit.edu/blog/wp-content/uploads/2017/08/MikeMcHargueHeadshotOutdoor.jpg'
    })

    if errors:
        raise Exception(errors)

    db.session.add(mike)

    beth, errors = user_schema.load({
        'username': 'simply_the_beth',
        'email': 'beth@beth.com',
        'bio': 'Simply the betht at finding boozey tours about London.',
        'password': 'password',
        'password_confirmation': 'password',
        'image': 'https://static.tvtropes.org/pmwiki/pub/images/tina_turner_8.jpg'
    })

    if errors:
        raise Exception(errors)

    db.session.add(beth)

    bete, errors = user_schema.load({
        'username': 'betteYaManE',
        'email': 'bete@bete.com',
        'bio': 'If it\'s near a Pret, I\'m in',
        'password': 'password',
        'password_confirmation': 'password',
        'image': 'http://cdn.kidscreen.com/wp/wp-content/uploads/2016/02/BettyBoop.jpg?a2a533'
    })

    if errors:
        raise Exception(errors)

    db.session.add(bete)

################ BARS ###############################

    jujus = Bar(
        name='Jujus',
        address='Ely\'s Yard, 15 Hanbury St, E1 6QR',
        lat=51.520886,
        lng=-0.073487,
        terrace=True,
        description='Where Mike lives.',
        hero='https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.abouttimemagazine.co.uk%2Fwp-content%2Fuploads%2F2017%2F05%2FIMG_22701.jpg',
        location='East'
    )
    db.session.add(jujus)

    the_culpeper = Bar(
        name='The Culpeper',
        address='40 Commercial St, E1 6LP',
        lat=51.5168921,
        lng=-0.0730285,
        terrace=True,
        description=' An 1884 boozer, named after local 17th-century herbalist Nicholas Culpeper, has been spruced up in East London fashion: strong design credentials, a fêted restaurant, five cosy bedrooms and, in summer, one of the most coveted rooftop terraces in the area.',
        hero='https://d37219swed47g7.cloudfront.net/media/images/reviews/the-culpeper/banners/1497198049.14.jpg',
        location='East'
    )
    db.session.add(the_culpeper)

    discount_suit_company = Bar(
        name='Discount Suit Company',
        address='29 Wentworth St, E1 7TB',
        lat=51.516674,
        lng=-0.0774967,
        terrace=False,
        description='Discount Suit cocktail bar is situated moments from Spitalfields Market and Liverpool Street station. We are also in close walking distance of Brick Lane and Shoreditch. The bar focuses on great cocktails with traditional methods and forgotten classic recipes.',
        hero='https://media.drinkup.london/images/media/ee1389b8c9aa727653a90069dfed9e3c.jpg',
        location='East'
    )
    db.session.add(discount_suit_company)

    blind_beggar = Bar(
        name='The Blind Beggar',
        address='337 Whitechapel Rd, E1 1BU',
        lat=51.5199828,
        lng=-0.0590797,
        terrace=True,
        description='This famous pub is where Ronnie Kray murdered George Cornell in front of witnesses, is the location of William Booth''s first sermon, which led to the creation of the Salvation Army, and was the nearest outlet (or brewery tap) for the Manns Albion brewery, where the first modern Brown Ale was brewed',
        hero='https://www.traveldarkly.com/wp-content/uploads/2016/09/Kray-Twins-Gangsters-Blind-Beggar-Pub-Whitechapel-1030x687.jpg',
        location='East'
    )
    db.session.add(blind_beggar)

    pub_on_park = Bar(
        name='Pub on the Park',
        address='19 Martello St, E8 3PE',
        lat=51.5421,
        lng=-0.0582,
        terrace=True,
        description='Situated on the very edge of London Fields, "Pub on the Park" have spectacular views across the park, Summer or Winter, and are easily accessible from Hackney Central, London Fields or Haggerston overground and a multitude of buses.',
        hero='http://pubonthepark.com/wp-content/uploads/2016/11/Deck03.jpg',
        location='East'
    )
    db.session.add(pub_on_park)

    royal_oak = Bar(
        name='The Royal Oak',
        address='73 Columbia Rd, E2 7RG',
        lat=51.5295501,
        lng=-0.0714865,
        terrace=False,
        description='You might just recognise this pub off the telly - it has featured in the Kray''s film, sitcom Good Night Sweetheart and even Blue Peter. The look - like something straight out of the 1940s - hasn''t been diminished by any number of refits in the intervening years either. This former gay pub has been transformed into yet another excellent gastropub with more table space in the dining room upstairs',
        hero='https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/28/16/the-royal-oak-pic.jpg?w968',
        location='East'
    )
    db.session.add(royal_oak)

    grapes = Bar(
        name='The Grapes',
        address='76 Narrow Street, E14 8BP',
        lat=51.5092305,
        lng=-0.0396032,
        terrace=False,
        description='Overlooking the Thames, in a peaceful neighbourhood not that far from the bustle of Canary Wharf, The Grapes is one of the oldest pubs in London. Charles Dickens was a patron, and even made reference to the pub in his novel ''Our Mutual Friend''. Leaseholder Ian McKellen has written a brief history, here, should you wish to find out more. They also offer an excellent pub quiz on Monday Nights',
        hero='https://cdn2.wanderlust.co.uk/media/2302/blogs-a-drinkers-guide-to-londons-oldest-pubs.jpg',
        location='East'
    )
    db.session.add(grapes)

    whitby = Bar(
        name='Prospect of Whitby',
        address='57 Wapping Wall, St Katharine''s & Wapping, E1W 3SH',
        lat=51.5070813,
        lng=-0.0533257,
        terrace=False,
        description='One of London''s most famous pubs, and supposedly our city''s oldest riverside inn. With a pedigree stretching back to 1520, it was already getting on a bit when Shakespeare first came to town. You''ll fall in love with the pewter-topped bar and creaky wooden interior, all rebuilt following a fire in Victorian times and a further refit in the 1950s, though some of the flagstones are reckoned to be centuries old. The drinking terrace out back is one of the most sought-after spots on a warm summer''s day, and an upstairs room adds extra, oft-needed capacity.',
        hero='https://s3-us-west-2.amazonaws.com/voicemap.me/public/routes/images/000/000/137/original/prospect-of-whitby.jpg',
        location='East'
    )
    db.session.add(whitby)

    franks = Bar(
        name='Frank''s',
        address='Bold Tendencies, 7th-10th Floor Multi Storey Car Park, 95A Rye Ln, SE15 4ST',
        lat=51.470608,
        lng=-0.068110,
        terrace=True,
        description='While rival rooftop bars play to the masses with crazy golf and street food stalls, Frank’s has stayed to true to its left-field roots. The bar is just one part of the Bold Tendencies art gallery (in fact, when it opened, the wooden structure was considered an artwork itself, and won an architecture prize.)',
        hero='https://d37219swed47g7.cloudfront.net/media/images/reviews/franks-cafe-campari-bar/banners/1497010816.04.jpg',
        location='South'
    )
    db.session.add(franks)

    springs = Bar(
        name='Peckham Springs',
        address='4-5 Dovedale Trading Estate, SE15 4QN',
        lat=51.4697354,
        lng=-0.072304,
        terrace=False,
        description='Part-gallery, part-bar, you''ll find Peckham Springs — yes, the name is inspired by Del Boy''s infamous back garden water business — in the shadow of Peckham Rye Station, under the arches by Bar Story. It started as a summer pop-up but is now staying open all year round on Fridays and Saturdays.',
        hero='https://hirespace.imgix.net/spaces/165475/m5kxuyg5elq.jpg?h=600&w=1200&auto=format&fit=crop&q=40',
        location='South'
    )
    db.session.add(springs)

    fullback = Bar(
        name='The Faltering Fullback',
        address='19 Perth Rd, Stroud Green, N4 3HB',
        lat=51.5684843,
        lng=-0.1103997,
        terrace=True,
        description='Hidden away on the leafy avenue of Perth Road, tucked behind Finsbury Park, you''ll find this charming, well loved Irish pub. Come down, grab a pint and your own corner in the amazing garden, in front of the big screen sports, or by the bar. Wile away your day contemplating the ceiling inspiration, challenge your brain in our hugely popular quiz, or party with pals till late on Fridays and Saturdays.',
        hero='http://irishtrad.org/wp-content/uploads/2018/02/Faltering-Fullback.jpg',
        location='North'
    )
    db.session.add(fullback)

    lamb = Bar(
        name='The Lamb',
        address='54 Holloway Rd, Highbury East, N7 8JL',
        lat=51.5484587,
        lng=-0.1090147,
        terrace=False,
        description='Purpose built as a boozer in the 1870s, The Lamb opened in its current incarnation in February 2012. We’re a completely independent pub and specialise in local beers from the likes of Five Points, Howling Hops, Signature Brew, By The Horns, Hammerton, Hackney Brewery etc - we have 12 keg lines and 3 cask lines!  There is also a pretty good range of wines and spirits.  Formerly a brewpub, The Lamb has a beautiful interior with handsome wood panelling and skylights, as well as the painstakingly stripped back original green tiles on the facade.',
        hero='http://irishtrad.org/wp-content/uploads/2018/01/Lamb.jpg',
        location='North'
    )
    db.session.add(lamb)

    andover = Bar(
        name='The Andover Arms',
        address='57 Aldensley Rd, Hammersmith, W6 0DL',
        lat=51.4968,
        lng=-0.2327,
        terrace=False,
        description='Nestled in charming Brackenbury Village, a unique west London neighbourhood the Andover Arms is a welcome home for much-loved locals and new friends alike. ‘The Andover’ is a thriving part of community life and we champion the kind of hospitality where a gentle nod to attentive staff leads to your drink of choice or a signature Sunday Lamb Roast. Whether a Roast, market fresh fish or a delicious salad we use great ingredients in carefully crafted home-made dishes representing the best of British and beyond.',
        hero='http://theandoverarms.com/wp-content/uploads/2018/09/cropped-andoverarms.jpg',
        location='West'
    )
    db.session.add(andover)

    dove = Bar(
        name='The Dove',
        address='19 Upper Mall, Hammersmith, W6 9TA',
        lat=51.4905,
        lng=-0.2349,
        terrace=False,
        description='The Dove is a Grade II listed public house at 19 Upper Mall, Hammersmith, London W6 9TA. It dates from the early 18th century. A number of historical figures have been associated with the pub beside the River Thames. Among these are Graham Greene, Ernest Hemingway, Dylan Thomas and William Morris who lived next door. James Thompson is said to have written the words for the 1740 song Rule, Britannia! there. The pub appears in the 1930 A. P. Herbert novel The Water Gipsies, loosely disguised as the fictitious The Pigeons. The front bar of the pub is listed in the Guinness book of Records as the smallest public bar in the United Kingdom.',
        hero='http://www.doitinlondon.co.uk/files/2015/drink-and-food/The_Dove_PRINC_2X.jpg',
        location='West'
    )
    db.session.add(dove)

    marks_bar = Bar(
        name='Mark\'s Bar',
        address='66-70 Brewer St, Soho, W1F 9UP',
        lat=51.5111389,
        lng=-0.1386364,
        terrace=False,
        description='Leather chesterfields, ambient lighting, and a list full of historical curiosities, Mark\’s Bars are the places to sit back and enjoy a more eccentric approach to drinking.',
        hero='https://www.hixrestaurants.co.uk/wp-content/uploads/2015/10/11-microsite-4-marks-bars-1-landing-top-banner-4-1600x7681.jpg',
        location='West'
    )
    db.session.add(marks_bar)

    boundary = Bar(
        name='Boundary Rooftop Bar',
        address='2-6 Boundary Row, SE1 8HP',
        lat=51.52453,
        lng=-0.0785037,
        terrace=True,
        description='Great place to sit and watch the skyline ooze from blue to red. Formerly just any old hotel roofterrace, this bar was  \'eastified\' to suit the more hipster tastes of the surrounding area...You can become one with all the conflicting forces of east London and enjoy a pricy cocktail in this much more chic than shabby, definitely bouji drink hole',
        hero='https://images.immediate.co.uk/volatile/sites/2/2016/10/Boundary-Rooftop-PM.jpg?quality=45&resize=960,413',
        location='East'
    )
    db.session.add(boundary)

    queen_hoxton = Bar(
        name='Queen of Hoxton',
        address='1 Curtain Rd, EC2A 3JX',
        lat=51.5221383,
        lng=-0.0834237,
        terrace=True,
        description='If you manage to manouvre your way out of the lower floors through the sweat-streamed masses on a busy Saturday then you\'ll be delighted to reach the spacious light of the rooftop terace. Come on a Hot day before 5pm and you\'ll have a tonne of room and if it be summertime you will also get treated to the excellent fares from their barbecue. ' ,
        hero='http://2.bp.blogspot.com/-aaW42qPytcw/T6gLzsQC0sI/AAAAAAAAAIs/D2G1l1lryfg/s1600/6972501378_f2293ccdf1_o.jpg',
        location='East'
    )
    db.session.add(queen_hoxton)

    queen_elizabeth = Bar(
        name='Queen Elizabeth Hall Rooftop Garden',
        address='Southbank Centre, SE1 8XX',
        lat=51.5067192,
        lng=-0.1183676,
        terrace=True,
        description='Errr, wildflowers and Pimm\'s, anyone? What\'s not to love? This place is genuinely a hidden gem, all those people walking on by the Southbank missing this glory are truly missing out. Do not be one of them. Perfect for a sunny rooftop bar crawl in central London.' ,
        hero='https://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2015/04/Southbank-Centres-Roof-Gar.jpg',
        location='East'
    )
    db.session.add(queen_elizabeth)



################ CRAWLS ######################

    the_best_crawl = Crawl(
        name='Best crawl ever',
        description='I had such a great time going to these bars! Mark\'s Bar was quite quite for a Friday (but so cheap!) so we then made a move to Royal Oak, which had a great pub quiz on!',
        date='Friday 22nd February',
        creator=mike
    )

    east_end = Crawl(
        name='East End Crawl',
        description='A tour of the seven wonders of the East End. Perfect for old-timers as well as those new to the area - great way to meet some locals if you\'ve just moved to East London!',
        date='Friday 8th February',
        creator=mike
    )

    north_crawl = Crawl(
        name='North Crawl',
        description='So much fun',
        date='Saturday 2nd February',
        creator=mike
    )

    fun_crawl = Crawl(
        name='Fun Crawl',
        description='So much fun',
        date='Thursday 31st January',
        creator=mike
    )

    the_best_crawl = Crawl(
        name='West Crawl',
        description='So much fun',
        date='Friday 22nd February',
        creator=mike
    )

    history_crawl = Crawl(
        name='Historic Bar Crawl',
        description='Start off this crawl by having a couple of beers over looking the Thames at the one of the oldest pubs in London, The Grapes. Charles Dickens was a patron, and even made reference to the pub in his novel Our Mutual Friend. Take a stroll along the river to the Prospect of Whitby,the hostelry of choice of "Hanging" Judge Jeffreys, scourge of the Monmouth Rebellion. He lived nearby and a replica gallows and noose hangs by the Thameside window, commemorating his custom. According to legend, criminals would be tied up to the posts at low tide and left there to drown when the tide came in. Views from the pub were sketched by both Turner and Whistler, the writers Charles Dickens and Samuel Pepys are known to have paused to sup here. Next head from the river towards the Blind Beggar, site of the notorious Kray murder in 70s and the location of William Booth''s first sermon, which led to the creation of the Salvation Army. Finally end up at the Royal Oak, another Kray twin haunt situated next to London''s best known flower market.',
        date='Monday 4th March',
        creator=mike
    )

    rooftop_crawl = Crawl(
        name='Rooftops of London',
        description='If you\'re like me you too can become the chimp you were born to be and swing from rooftop to rooftop bar, traversing the central sights and catching the golden hour at one of the best viewing spots in London',
        date='Monday 4th March',
        creator=beth
    )


############### STOPS ############################

    rooftop_crawl.stops = [
        Stop(bar=queen_elizabeth, order=0),
        Stop(bar=boundary, order=1),
        Stop(bar=queen_hoxton, order=2),
    ]
    db.session.add(rooftop_crawl)

    history_crawl.stops = [
        Stop(bar=grapes, order=0),
        Stop(bar=whitby, order=1),
        Stop(bar=blind_beggar, order=2),
        Stop(bar=royal_oak, order=3)
    ]
    db.session.add(history_crawl)

    the_best_crawl.stops = [
        Stop(bar=marks_bar, order=0),
        Stop(bar=royal_oak, order=1)
    ]
    db.session.add(the_best_crawl)


    east_end.stops = [
        Stop(bar=pub_on_park, order=0),
        Stop(bar=blind_beggar, order=2),
        Stop(bar=royal_oak, order=1)
    ]
    db.session.add(east_end)

    north_crawl.stops = [
        Stop(bar=lamb, order=1),
        Stop(bar=fullback, order=0)
    ]
    db.session.add(north_crawl)


    fun_crawl.stops = [
        Stop(bar=discount_suit_company, order=1),
        Stop(bar=the_culpeper, order=0)
    ]
    db.session.add(fun_crawl)

############## COMMENTS ###########################

    comment1 = Comment(content='Hate this crawl, is dead rubbish', crawl=east_end, author=mike)

    db.session.add(comment1)

    comment2 = Comment(content='This crawl took days to complete. Each leg was fun, but overall the length could be shorter!', crawl=east_end, author=beth)

    db.session.add(comment1)

    comment3 = Comment(content='Days to complete? Took me a matter of minutes!', crawl=east_end, author=bete)

    db.session.add(comment1)


    db.session.commit()
