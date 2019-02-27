from app import app
from controllers import auth, users, bars

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(bars.api, url_prefix='/api')
