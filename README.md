# General Assembly Project 04 : Full-Stack React App

Ben Lander | Beth Swingler | Dexter De Leon | Tom Abbott

### Project Brief
The brief was to create a full-stack app with a PostgreSQL/Python back-end and a React front-end. We were also tasked with testing one functional react component and one classical component.

### Timeframe
7 days

## Technologies used

* React
* JavaScript (ES6)
* Node.js
* Webpack
* MongoDB/Mongoose
* Chai/Mocha
* Supertest/NYC
* Bulma
* Nodemailer
* React Filestack
* HTML 5
* SASS/SCSS/CSS Animation
* Git/GitHub

## Deployed version
-

## Code Installation

1. Clone or download the repo
2. Install ```yarn``` (and ```pipenv```?) in Terminal
3. Launch a flask server ```yarn  serve:flask```
4. Launch webpack ```yarn serve:flask```


## Created App: An Overview
Sunset Barlevard is a route-finding app tailored to those looking not just for places to drink, but rather for coherent bar crawls through London. The USP is that it allows users to opt into searching specifically for rooftop bars, beer gardens and summer walks between pubs with excellent outdoor terraces.

Users can upload two types of object:
1. Their favourite secret haunt or lesser-known pub rooftop;
2. A series of these bars in a particular order to create a coherent route (‘crawl’) through London, which passes through several bars within a theme.

We also created a ‘sunshine mode’ toggle button. In ‘sunshine mode’, crawl results are filtered for being comprised of at least 50% outdoor bar space.



## User Journey
Homepage

Homepage in sunshine mode

Crawl show route

Register

Create a Crawl  




# Process

###planning
Our focus for this project was using a React.js front-end to connect users to a PostgreSQL database that had a nice variety of relationships between models. We liked the idea of a bar crawls app and sketched out some entity relationship diagrams (ERDs) to clarify the following relationships:

1. A many-to-many relationship between bars and crawls,
2. A one-to-many relationships between users and crawls,
3. A one-to-many relationship between users and bars,
4. A one-to-many relationship between crawls and comments

We decided on the properties for each model, and realised that there would be an interesting relationship between 'order' - a property that was of bars but only when those bars were in a particular crawl, and could be different for each crawl that any bar appeared in.

![screenshot- ERD for order] (https://user-images.githubusercontent.com/44749113/54317824-3375f180-45dc-11e9-8b82-956c1fa7e3db.png)


We knew that this would require some extra attention so we referred to the SQLAlchemy documentation and found an variant on the many-to-many relationship called an 'Association Object' (https://docs.sqlalchemy.org/en/latest/orm/basic_relationships.html#association-pattern). This allowed bars on the left side to reference multiple instantiations of order via a one-to-many relationship, and on the right side, crawls to reference order via a many-to-one relationship, but without needing to create an extra model just for any bar's order within each crawl.

We then set up the Flask server and hooked it up to SQLAlchemy to allow us to start creating SQL database entries.

### Back End

We used SQLAlchemy to interact with the database, and Flask framework methods to ‘JSONify’ Python dicts, create Blueprints and create secure authentication routes.  We also used the Marshmallow library for validating schema and formatting data such as upload times for comments.




### Front End




### Testing
We used Mocha, Chai...

### Challenges

- The biggest and most interesting challenge was definitely figuring out how to include order as a property of bars when and only when they are embedded within crawl objects. The hardest part was trying to figure out the correct search terms as we'd never come across an ‘association object’ using SQLAlchemy. Fortunately it allowed us to create a (meta) join table such that each stop on a crawl joined the crawl’s id with the bar’s id and their particular order in that instance.

### Wins

- We were pleased that we had time to include 'sunshine mode' as this had been a fun feature of our original plan for the app.

## Future Features

We’re next working on the edit route on both the front and back end of the application that will allow users to easily ‘drag and drop’ their bar crawl ‘stops’ into different orders.

Other future features we'd like to add include:
- 'Favourites' - to allow  league table of 'most favourited' crawls.
- 'Following' - to allow users to follow the most creative crawl creators on the platform.
