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
        'bio': 'Simply the betht at finding boozey tours about London Town.',
        'password': 'password',
        'password_confirmation': 'password',
        'image': 'https://static.tvtropes.org/pmwiki/pub/images/tina_turner_8.jpg'
    })

    if errors:
        raise Exception(errors)

    db.session.add(beth)

    bete, errors = user_schema.load({
        'username': 'bettteYeManEh',
        'email': 'bete@bete.com',
        'bio': 'If your crawls go past Pret I am in... Love rooftop bars and finding new ways to explore London, especially with a glass of red in hand. Pret stop, anyone?',
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
        description='Otherwise known as "Mike\'s House", this Mexican-themed bar and stage offers live music, expensive and often fairly flat beer, and a glut of WDI students on a Friday afternoon. The outdoor terraces are lively and well-heated even in the early Spring.',
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
        description=' An 1884 boozer, named after local 17th-century herbalist Nicholas Culpeper, has been spruced up in East London fashion: strong design credentials, a fêted restaurant, five cosy bedrooms and, in summer, one of the most coveted rooftop terraces in the area. An historical delight.',
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
        description='This famous pub is where Ronnie Kray murdered George Cornell in front of witnesses, is the location of William Booth\'s first sermon, which led to the creation of the Salvation Army, and was the nearest outlet (or brewery tap) for the Manns Albion brewery, where the first modern Brown Ale was brewed',
        hero='https://c1.staticflickr.com/4/3802/9550616256_591c925cc6_b.jpg',
        location='East'
    )
    db.session.add(blind_beggar)

    pub_on_park = Bar(
        name='Pub on the Park',
        address='19 Martello St, E8 3PE',
        lat=51.5421,
        lng=-0.0582,
        terrace=True,
        description='Situated on the very edge of London Fields, "Pub on the Park" have spectacular views across the park, Summer or Winter, and are easily accessible from Hackney Central, London Fields or Haggerston overground and a multitude of buses. Lively and certainly, certainly hip',
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
        description='You might just recognise this pub off the telly - it has featured in the Kray\'s film, sitcom Good Night Sweetheart and even Blue Peter. The look - like something straight out of the 1940s - hasn\'t been diminished by any number of refits in the intervening years either. This former gay pub has been transformed into yet another excellent gastropub with more table space in the dining room upstairs',
        hero='https://us-east.manta.joyent.com/condenast/public/cnt-services/production/2015/11/20/564f69f396771ce632e45991_the-royal-oak-london-cr-alamy.jpg',
        location='East'
    )
    db.session.add(royal_oak)

    grapes = Bar(
        name='The Grapes',
        address='76 Narrow Street, E14 8BP',
        lat=51.5092305,
        lng=-0.0396032,
        terrace=False,
        description='Overlooking the Thames, in a peaceful neighbourhood not that far from the bustle of Canary Wharf, The Grapes is one of the oldest pubs in London. Charles Dickens was a patron, and even made reference to the pub in his novel \'Our Mutual Friend\'. Leaseholder Ian McKellen has written a brief history, here, should you wish to find out more. They also offer an excellent pub quiz on Monday Nights',
        hero='http://www.beatlesviptours.com/_uploads/images/dscn0067.jpg',
        location='East'
    )
    db.session.add(grapes)

    whitby = Bar(
        name='Prospect of Whitby',
        address='57 Wapping Wall, St Katharine''s & Wapping, E1W 3SH',
        lat=51.5070813,
        lng=-0.0533257,
        terrace=False,
        description='One of London\'s most famous pubs, and supposedly our city\'s oldest riverside inn. With a pedigree stretching back to 1520, it was already getting on a bit when Shakespeare first came to town. You\'ll fall in love with the pewter-topped bar and creaky wooden interior, all rebuilt following a fire in Victorian times and a further refit in the 1950s, though some of the flagstones are reckoned to be centuries old. The drinking terrace out back is one of the most sought-after spots on a warm summer\'s day, and an upstairs room adds extra, oft-needed capacity.',
        hero='https://s3-us-west-2.amazonaws.com/voicemap.me/public/routes/images/000/000/137/original/prospect-of-whitby.jpg',
        location='East'
    )
    db.session.add(whitby)

    netil = Bar(
        name='Netil 360',
        address='1 Westgate St, London E8 3RL',
        lat=51.5377301,
        lng=-0.0599151,
        terrace=True,
        description='After climbing to the top of what looks like a pretty boring old building, you’ll reach the rooftop of what is now a block of studios and artist spaces, Netil 360. With far reaching views over East London, this workspace come cafe come bar come terrace is somewhat like an adult’s common room with alcoholic iced lollies. It’s a great place to work, read, lounge, or socialise with friends, as well as having interesting events such as yoga, bookbinding, and letterpress classes. There’s a resident dog called Tres and your own dogs are also welcome. Casual, comfortable, and a degree of separation from the city streets, be sure to check out Netil House.',
        hero='https://www.telegraph.co.uk/content/dam/Travel/2017/April/netil.jpg',
        location='East'
    )
    db.session.add(netil)

    dalston_roof = Bar(
        name='Dalston Roof Park',
        address='The Print House, 18-22 Ashwin St, London E8 3DL',
        lat=51.5469092,
        lng=-0.0769626,
        terrace=True,
        description='Nestled amongst Hackney\'s Victorian buildings and overlooking London\'s skyscrapers, Dalston\'s only rooftop venue is an opportunity to relax, eat, drink, dance and see the London landscape differently. Framed by the city skyline, our rooftop oasis transforms what was once a forgotten space into a music venue / park, plushly turfed and brimming with flowers, palm trees and a Martin Audio Soundsystem! ',
        hero='https://i2.wp.com/www.todott.com/wp-content/uploads/2017/04/Photo-%C2%A9-Harry-Powell.jpg-large.jpg?ssl=1',
        location='East'
    )
    db.session.add(dalston_roof)

    spurstowe = Bar(
        name='The Spurstowe Arms',
        address='68 Greenwood Rd, London E8 1AB',
        lat=51.5453802,
        lng=-0.0654469,
        terrace=True,
        description='One of the more mature pubs in the Hackney canon, the Spurstowe Arms works a sophisticated stripped-back charm, never trying too hard to impress – which of course just wouldn’t wash in this trendy part of town. The nondescript exterior would have you believe the Spurstowe was a football pub or stop-off for a desperate quick half, but inside features fresh-cut flowers, polished brass and a grand horseshoe bar. You’ll still spot the odd reassuring cobweb up on high though, and, oddly enough, a bathtub in the beer garden.',
        hero='http://media.virbcdn.com/cdn_images/resize_1600x1600/f6/65ea86fe619ec909-16c3be9249519fb7-PUB3.png',
        location='East'
    )
    db.session.add(spurstowe)

    cat_and_mutton = Bar(
        name='The Cat and Mutton',
        address='76 Broadway Market, London E8 4QJ',
        lat=51.537632,
        lng=-0.060870,
        terrace=False,
        description='Cosy, welcoming and positively vibrant at the weekend, The Cat & Mutton is everything a great boozer should be and more. Established way back in 1729, you\'ll find this East London drinking institution on Broadway Market within touching distance of London Fields.The venue comes set across two floors, with punters enjoying a fine spread of beers, wines and spirits on the ground floor and a cosy cocktail bar ambience upstairs.',
        hero='https://media.timeout.com/images/102192715/image.jpg',
        location='East'
    )
    db.session.add(cat_and_mutton)

    franks = Bar(
        name='Frank\'s',
        address='Bold Tendencies, 7th-10th Floor Multi Storey Car Park, 95A Rye Ln, SE15 4ST',
        lat=51.470608,
        lng=-0.068110,
        terrace=True,
        description='While rival rooftop bars play to the masses with crazy golf and street food stalls, Frank\'s has stayed to true to its left-field roots. The bar is just one part of the Bold Tendencies art gallery (in fact, when it opened, the wooden structure was considered an artwork itself, and won an architecture prize.)',
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
        description='Part-gallery, part-bar, you\'ll find Peckham Springs — yes, the name is inspired by Del Boy\'s infamous back garden water business — in the shadow of Peckham Rye Station, under the arches by Bar Story. It started as a summer pop-up but is now staying open all year round on Fridays and Saturdays.',
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
        hero='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/11/09/faltering-fullback.jpg',
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

    spaniards = Bar(
        name='The Spaniards Inn',
        address='Spaniards Rd, Hampstead, London NW3 7JJ',
        lat=51.569902,
        lng=-0.1761637,
        terrace=True,
        description='Dating back to the 1500s and housed in a Grade II listed building, The Spaniards has been lovingly preserved, combining traditional wood-panelling and period features with gentle contemporary touches. Boasting an open fire and many a cosy corner, the pub also offers a delightful walled beer garden - perfect for laid-back afternoons, al-fresco dining or just a glass of something special on a sunny day. Attracting a diverse clientele and fostering a relaxed atmosphere, this welcoming pub holds the spirit of the great British local close to its heart.',
        hero='http://www.reidsengland.com/site/assets/files/2595/ext.jpg',
        location='North'
    )
    db.session.add(spaniards)

    holly_bush = Bar(
        name='The Holly Bush',
        address='22 Holly Mount, London NW3 6SG',
        lat=51.557868,
        lng=-0.1815167,
        terrace=False,
        description='Situated right in the heart of Hampstead, The Holly Bush is a historic pub that offers the perfect escape from the hustle and bustle of central London. They take old fashioned pub-keeping very seriously so you can expect only the best of traditional pub food and real ale. Inside, the venue retains all the flavour of a classic British pub with its open fire, leather banquettes and dark wood furnishings. As a traditional pub it would only be fitting that they served equally traditional pub grub and The Holly Bush\'s menu of locally sourced and home-cooked British food doesn\'t disappoint.',
        hero='https://www.hollybushhampstead.co.uk/-/media/sites/microsites/h/the-holly-bush-_-p151/images/december-2017-images/gallery/exterior/hollybush_mbl0060.jpg',
        location='North'
    )
    db.session.add(holly_bush)

    southampton = Bar(
        name='The Southampton Arms',
        address='139 Highgate Rd, Highgate, London NW5 1LE',
        lat=51.5560675,
        lng=-0.1483721,
        terrace=False,
        description='A refurbished and revitalised incarnation of an old-fashioned boozer, the Southampton Arms has managed to retain a relaxed, local feel, even at busy times. Twelve hand pumps on the bar are mostly used to dispense cask ales from independent UK brewers, and six further pumps behind the bar offer ciders. There are also two keg taps, serving beers from the likes of Camden Town. Oh, and one of only a handful of places (see also Ye Olde Mitre and The George) to have an outdoor toilet.',
        hero='http://1.bp.blogspot.com/-iReY_Gd31F0/TfShD7uKB4I/AAAAAAAABr0/rrNf7cFAAzQ/s1600/southampton+arms+bar.jpg',
        location='North'
    )
    db.session.add(southampton)

    flask = Bar(
        name='The Flask',
        address='77 Highgate W Hill, Highgate, London N6 6BU',
        lat=51.5698867,
        lng=-0.153043,
        terrace=True,
        description='The Flask harks back to an era when Highgate was a small village on the outskirts of London and the stable block dates back to 1663. Like all good pubs, The Flask has its own legends which may or may not be true. It is said that the highwayman Dick Turpin hid from the law in the stables there, that the artist William Hogarth drank at the bar and even that Karl Marx was a customer. For good measure, the pub is also said by some to have a female ghost',
        hero='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flask%2C_Highgate%2C_N6_%282883805442%29.jpg/1200px-Flask%2C_Highgate%2C_N6_%282883805442%29.jpg',
        location='North'
    )
    db.session.add(flask)

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
        description='Errr, wildflowers and Pimm\'s, anyone? What\'s not to love? This place is genuinely a hidden gem, laugh at all those people walking on by the bistling Southbank missing this glory - they are  missing out. Do not be one of them. Perfect for a sunny rooftop bar crawl in central London.' ,
        hero='https://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2015/04/Southbank-Centres-Roof-Gar.jpg',
        location='Central'
    )
    db.session.add(queen_elizabeth)

    radio = Bar(
        name='Radio Rooftop Bar',
        address='336 The Strand, Covent Garden, WC2R 1HA',
        lat=51.5120327,
        lng=-0.1206135,
        terrace=True,
        description='Pop in for a quick drink on your way to other bars on a sunny walk through central. Infamous for it\'s rude service and terrible food, this place is more about the views, music and tasty cocktails than the gastronomy or indeed clientele. But eating is cheating, afterall, so pop in anyway on your way over the river, expect the worst and get out quick and you\'ll have a nice timers.',
        hero='https://www.melondonhotel.com/uploads/images/headerimagessecondary43/secondarysmallimage28/Radio_rooftop_bar_Copy.jpg',
        location='Central'
    )
    db.session.add(radio)

    argent = Bar(
        name='Coq d\'Argent',
        address='1 Poultry, EC2R 8EJ',
        lat=51.5132888,
        lng=-0.0910342,
        terrace=True,
        description='Definitely where to stop for food if you have the cash. Renowned mainly as a restaurant venue, Coq d\'Argent also has a roof garden that doubles up as a cocktails space. Not necessarily cheap, but this is Central London, and that is the actual view.  ',
        hero='https://media.headbox.com/uploads/space_photo/filename/38874/detail_widen-1680-noupsize_2265-bar-terrace-room.jpg',
        location='Central'
    )
    db.session.add(argent)

    worlds_end = Bar(
        name='The World\'s End',
        address='Stroud Green Rd, Finsbury Park, N4 3EF',
        lat=51.5669612,
        lng=-0.1081762,
        terrace=False,
        description='Good old fashioned classic boozer. Good music, often live shows, sometimes a little noisy but they have a reet big selection of ales and largers on tap so maybe that won\'t matter?',
        location='North',
        hero='https://www.standard.co.uk/s3fs-public/thumbnails/image/2018/01/11/09/worlds-end.jpg'
    )
    db.session.add(worlds_end)

    oxo = Bar(
        name='The OXO tower bar',
        address='OXO Tower, Southbank, SE1 9H',
        lat=51.5064129,
        lng=-0.1126076,
        terrace=True,
        description='Spenny but panoramic in the extreme. Great for that proper Southbank view of the M16 architecture. ',
        location='Central',
        hero='http://www.oxotower.co.uk/wp-content/uploads/2013/11/Main-image-for-websites-summer-2014.jpg'
    )
    db.session.add(oxo)

    trafalgar = Bar(
        name='The Trafalgar St. James',
        address='Trafalgar Square, SW1A 2TS',
        lat=51.5069549,
        lng=-0.1275326,
        terrace=False,
        description='Bit epic really getting all up close and personal with Admiral Nelson. ',
        location='Central',
        hero='https://thenudge.com/wp-content/uploads/1970/01/trafalgar-st-james-rooftop-1920x849.jpg'
    )
    db.session.add(trafalgar)



################ CRAWLS ######################

    history_crawl = Crawl(
        name='Historic Bar Crawl',
        description='Start off this crawl by having a couple of beers over looking the Thames at the one of the oldest pubs in London, The Grapes. Charles Dickens was a patron, and even made reference to the pub in his novel Our Mutual Friend. Take a stroll along the river to the Prospect of Whitby,the hostelry of choice of "Hanging" Judge Jeffreys, scourge of the Monmouth Rebellion. He lived nearby and a replica gallows and noose hangs by the Thameside window, commemorating his custom. According to legend, criminals would be tied up to the posts at low tide and left there to drown when the tide came in. Views from the pub were sketched by both Turner and Whistler, the writers Charles Dickens and Samuel Pepys are known to have paused to sup here. Next head from the river towards the Blind Beggar, site of the notorious Kray murder in 70s and the location of William Booth\s first sermon, which led to the creation of the Salvation Army. Finally end up at the Royal Oak, another Kray twin haunt situated next to London\s best known flower market.',
        creator=mike
    )

    history_crawl.stops = [
        Stop(bar=grapes, order=0),
        Stop(bar=whitby, order=1),
        Stop(bar=blind_beggar, order=2),
        Stop(bar=royal_oak, order=3)
    ]
    db.session.add(history_crawl)

    rooftop_crawl = Crawl(
        name='Rooftops of London',
        description='If you\'re like me you too can become the chimp you were born to be and swing from rooftop to rooftop bar, traversing the central sights... even if you fail to finish it, start early and you will catch the golden hour at one of the best viewing spots in London',
        creator=beth
    )

    rooftop_crawl.stops = [
        Stop(bar=queen_elizabeth, order=0),
        Stop(bar=radio, order=1),
        Stop(bar=argent, order=2),
        Stop(bar=boundary, order=4),
        Stop(bar=queen_hoxton, order=3)
    ]
    db.session.add(rooftop_crawl)

    hampstead_boozers = Crawl(
        name='Old Boozers of North London',
        description='Start at the Flask in Highgate. Everytime time I go I see the girl from The Lion, the Witch and the Wardrobe, which is pretty cool. It\'s also supposed to be haunted, since the pub\'s Committee Room was allegedly the scene of one of the first-ever autopsies, secretly performed during the days of graverobbing with a fresh body from Highgate Cemetery. From this grisly start, head to Hampstead and have a beer at the Spianard\'s Inn, which is mentioned in Bram Stoker\'s Dracula. Stroll along the Heath to the Holly Bush and enjoy a beer in the hert of historic Hampstead village. Finally stumble along to Kentish Town to sample the real ales and home made suasage rolls at the Southampton Arms.',
        creator=mike
    )

    hampstead_boozers.stops = [
        Stop(bar=flask, order=0),
        Stop(bar=spaniards, order=1),
        Stop(bar=holly_bush, order=2),
        Stop(bar=southampton, order=3),
    ]
    db.session.add(hampstead_boozers)


    east_end = Crawl(
        name='East Enders',
        description='A tour of the seven wonders of the East End. Perfect for old-timers but mainly for those new to the area - like me - what a great way to meet some locals if you\'ve just moved to East London!',
        creator=mike
    )

    east_end.stops = [
        Stop(bar=pub_on_park, order=0),
        Stop(bar=blind_beggar, order=2),
        Stop(bar=royal_oak, order=1),
        Stop(bar=jujus, order=3)
    ]
    db.session.add(east_end)

    north_crawl = Crawl(
        name='North Crawl',
        description='North London is somewhat underrated for bars, but keep it safe and sound with some of the best pubs it\'s best renowned for. ',
        creator=mike
    )

    north_crawl.stops = [
        Stop(bar=lamb, order=1),
        Stop(bar=fullback, order=0),
        Stop(bar=worlds_end, order=2),
        Stop(bar=jujus, order=3)
    ]
    db.session.add(north_crawl)

    london_fields = Crawl(
        name='Pub Tour of London Fields',
        description='On a nice summer\'s day, what could be nicer than wandering across London Fields with regular pub pit-stops?? Start at the Spurstowe and have a beer or two in the beer garden out back. Next move onto London Fields itself to bask in the sun in The Pub on the Park\'s massive outside seating area. After that, you could throw yourself in London Fields outdoor lido, or just walk through the park to the Cat and Mutton, on the north edge of Broadway Market. Grab a bite to eat in the market if it\'s a saturday and finish the day in style by enjoying the panoramic views of London from the rooftop bar, Netil 360.',
        creator=mike
    )

    london_fields.stops = [
        Stop(bar=spurstowe, order=0),
        Stop(bar=pub_on_park, order=1),
        Stop(bar=cat_and_mutton, order=2),
        Stop(bar=netil, order=3)
    ]
    db.session.add(london_fields)

    southbank = Crawl(
        name='Sunny Southbank Session',
        description='Strolling along the Southbank just got much more interesting. Me and some mates made this crawl up freestyle one hot summer day in 2015, and have been regularly refining it since',
        creator=beth
    )

    southbank.stops = [
        Stop(bar=oxo, order=0),
        Stop(bar=radio, order=2),
        Stop(bar=queen_elizabeth, order=1),
        Stop(bar=trafalgar, order=3)
    ]
    db.session.add(southbank)


############## COMMENTS ###########################

    comment1 = Comment(content='Love this crawl, except that blind beggar truly is a dive... may miss that one out next time.', crawl=east_end, author=mike)

    db.session.add(comment1)

    comment2 = Comment(content='This crawl took hours to complete. Each leg was fun, but the length could be shorter!', crawl=east_end, author=beth)

    db.session.add(comment1)

    comment3 = Comment(content='I love the East End and I love this bar crawl.', crawl=east_end, author=bete)

    comment4 = Comment(content='Genuinely think everyone has gotta love this crawl.', crawl=history_crawl, author=mike)

    db.session.add(comment1)

    comment5 = Comment(content='This crawl is far too lofty and academic for my liking. A good old night at wetherspoons is in order after this fare.', crawl=history_crawl, author=beth)

    db.session.add(comment1)

    comment6 = Comment(content='What a crawl.', crawl=london_fields, author=bete)

    db.session.add(comment1)


    db.session.commit()
