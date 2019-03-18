# General Assembly Project 04 : Full-Stack React App

Beth Swingler | Bete Yemane | Michael Simmonds

### Project Brief
The brief for this project was to create a full-stack app with a PostgreSQL/Python back-end and a React front-end. We were also tasked with testing the front-end using one functional react component and one classical component.

### Timeframe
7 days

## Technologies used

* HTML5
* SASS/SCSS (CSS preprocessor)
* JavaScript (ES6)
* React
* Webpack
* PostgreSQL
* SQLAlchemy
* Flask
* Bulma (CSS framework)
* Git/GitHub
* Mocha/Chai
* Enzyme
* Sinon


## Deployed version

---> https://sunset-barlevard.herokuapp.com

## Code Installation

1. Clone or download the repo
2. Install ```yarn``` (and ```pipenv```) in Terminal
3. Launch a flask server ```yarn  serve:flask```
4. Launch Webpack to watch the front-end ```yarn serve:react```


## Overview
Sunset Barlevard is a route-finding app tailored to those looking not just for places to drink, but also for coherent bar-focussed tours through London. The USP is that it allows users to opt into searching specifically for rooftop bars, beer gardens and summer walks between pubs with excellent outdoor terraces.

*Users can upload two types of object:*
1. Their favourite secret haunt or lesser-known pub rooftop;
2. A series of these bars in a particular order to create a coherent route (‘crawl’) through London, which passes through several bars within a theme.

We also created a ‘sunshine mode’ toggle button. In ‘sunshine mode’, bar crawl results are filtered for being comprised of at least 50% outdoor bar space.



## User Journey

Homepage
![Homepage] (https://user-images.githubusercontent.com/44749113/54533913-30d01f00-4983-11e9-83f7-db9dc9b9b8bd.gif)

Crawl show route
![Crawl Show Page] (https://user-images.githubusercontent.com/44749113/54534905-46dedf00-4985-11e9-8def-66a4d62e85e1.gif)

Register
![Register page](https://user-images.githubusercontent.com/44749113/54535611-c7eaa600-4986-11e9-956b-67e7125f4811.gif)


# Process

###planning
Our focus for this project was creating a PostgreSQL database that had a nice variety of logical relationships between models, and connecting it to users via a React front-end. We decided to produce an app for displaying bar crawls, and sketched out some entity relationship diagrams (ERDs) to clarify the following relationships:

1. A many-to-many relationship between bars and crawls,
2. A one-to-many relationships between users and crawls,
3. A one-to-many relationship between users and bars,
4. A one-to-many relationship between crawls and users' comments on those crawls

We decided on the table properties (e.g name, location) for each model, and realised that the order of a bar within any given crawl would be an important property of each bar, but it would also exist only in relationship to that bar when within a particular crawl. As such a bar could have multiple instantiations of this property, and its order could be different for each crawl that the bar appears in.

![screenshot- ERD for order] (https://user-images.githubusercontent.com/44749113/54317824-3375f180-45dc-11e9-8b82-956c1fa7e3db.png)


We knew that this would require some extra attention so we referred to the SQLAlchemy documentation and found an variant on the many-to-many relationship called an 'Association Object' (https://docs.sqlalchemy.org/en/latest/orm/basic_relationships.html#association-pattern). This allowed bars on the left side to reference multiple instantiations of order via a one-to-many relationship, and on the right side, crawls to reference order via a many-to-one relationship, but without needing to create an entire model just for any bar's order within each crawl.

We then set up the Flask server and hooked it up to SQLAlchemy to allow us to start creating SQL database entries.

### Back End

Instead of writing lengthy SQL statements we used SQLAlchemy to interact with the database. We used the Python-based framework Flask to handle the RESTful HTTP requests (i.e. to act as the server).

We used Flask methods such as ```Blueprint``` to give controllers the logic for their own routing, ```g``` to verify whether a current user is the creator of a crawl or bar, and ```jsonify``` to translate errors (returned as Python dicts) to JSON strings that we could use for the view.  

Because the data retrieved from the PostgreSQL database via SQLAlchemy are in the form of objects, we used the Marshmallow library for serialising models into JSON strings. This meant we could also use Marshmallow for validating schema and formatting data such as upload times for users' comments.

To simply our controllers and models we created a BaseModel class, which we used as a mixin to store ```id```, ```save```, and ```remove``` methods that could be reused on all schemas, as well as ```created_at``` and ```updated_at``` timestamps.

We also created a ```@secure_route``` decorator function to check for a valid JSON web token (JWT) on some of the routes (e.g. create routes for crawls and bars). To do this we first had to hash passwords with BCrypt and store it in the database so that BCrypt could compare it against the password given when logging in. We used a hybrid property to securely receive the plain-text password from the user for hashing without storing it in the database. We then added a ```generate_token``` function to the user model, which we could invoke on the login route. The secure route function could then get the Authorization header, extract the token from it, decode the token and add the user's ```sub``` property (the user id from the payload) to the universal ```g``` object that Flask makes available across the app.


### Front End

We created a simple front-end in React.js. We split components into different categories and each took a category to focus on. We used Bulma to quickly set up a navigation bar and simple homepage. We focussed first on reaching MVP, and set up the basic show and index, register/login and new crawl ('add a crawl') pages such that they either displayed the relevant data or posted to the database (in the case of forms).

Once we'd reached MVP, we started creating functional components to be displayed on the core Show pages. For example, we added the Mapbox-gl integration so that we could display map routes on the Crawls Show page. Once set up it was then simple to create a similar functional map component on the bar show page.  Additional functional component features added at this stage were the crawl slider (slides through the bars on hover), comment form on the crawl show page, and crawl card, a component containing other components that is used on the homepage.  

The final thing we worked on was 'sunshine mode' the feature that allows users to view mainly bar crawls they'd want to partake in on a sunny day. This was done by creating a simple toggle button to filter the results displayed on the homepage (index page) to those containing 50% or more outdoor bars.


### Testing the front-end
We used Mocha, Chai, and Enzyme to test a subset of our React components.

First we set up JSDOM so that we could run front-end tests on a virtual browser in the terminal. To test the BarCard, a functional component, we used Enzyme's ```shallow``` method and simply checked that the HTML and test data that we passed in as props were being rendered correctly.

To test the Bars Show page, a classical component, we used Enzyme's ```mount``` method, and Sinon to create a fake Axios request. This allowed us to check that the data being stored in state was accurate and being rendered correcty.

### Challenges

- The biggest and most interesting challenge was definitely figuring out how to include order as a property of bars when and only when they are embedded within crawl objects. The hardest part was trying to figure out the correct search terms as we'd never come across an ‘association object’ using SQLAlchemy. Fortunately the right thing did exist that allowed us to create a (meta) join table such that each stop on a crawl joined the crawl’s id with the bar’s id and their particular order in that instance.

- After initially having just one slider component we decided that it made more sense for the slider that is used on the homepage (crawls index page) to do something different to the one on the crawl show page. As the primary focus of the app is crawls, it made more sense for the homepage slider to link to crawls, but the crawl show page slider to link to the individual bars within it. We solved this by duplicating the re-usable React component we made for both and mapping over different links in the crawl show slider but just using a single crawl link in the homepage slider. However, this was a problem for the DRY-ness of the front-end code, and it would be nice to find a less repetitive solution to this in future.

### Wins

- We were pleased that we had time to include 'sunshine mode' as this had been a fun feature of our original plan for the app, and a USP.

## Future Features

We’re next working on the edit route on both the front and back end of the application that will allow users to easily ‘drag and drop’ their bar crawl ‘stops’ into different orders.

Other future features we'd like to add include:
- 'Favourites' - to allow  league table of 'most favourited' crawls.
- 'Following' - to allow users to follow the most creative crawl creators on the platform.
