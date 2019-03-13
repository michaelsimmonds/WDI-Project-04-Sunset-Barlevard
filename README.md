# wdi-project-04
Final project

The brief was to create a full-stack app with a PostgreSQL/Python back-end and a React front-end. We were also tasked with testing one functional react component and one classical component.

For this project we decided to make a route-finding app tailored to those looking not just for bars or pub crawls in London, but more specifically for rooftop bars, beer gardens and summer walks between pubs with excellent outdoor terraces.

Users can upload two types of object: first, their favourite secret haunt or lesser-known pub rooftop; second, they can connect these bars in a particular order to create a coherent route (‘crawl’) through London which passes through several bars within a theme. Rather than forcing users to upload only alfresco spaces, we created a ‘sunshine mode’ toggle button. In ‘sushine mode’, crawl results are filtered for being comprised of at least 50% outdoor bar space.

The focus of this project was connecting users to a PostgreSQL database of bars and crawls via a React.js front-end. We used SQLAlchemy to interact with the database, and Flask framework methods to ‘JSONify’ Python dicts, create Blueprints and create secure authentication routes.  We also used the Marshmallow library for validating schema and formatting data such upload times for comments.

The biggest and most interesting challenge was definitely figuring out how to include order as a property of bars when and only when they are embedded within crawl objects. We created an ‘associated object’ using SQLAlchemy, which allowed us to create a (meta) join table such that each stop on a crawl joined the crawl’s id with the bar’s id and their particular order in that instance.

We’re next working on the edit route on both the front and back end of the application that will allow users to easily ‘drag and drop’ their bar crawl ‘stops’ into different orders.
