from flask import Flask

from flaskapp.config import Config
from flaskapp.main.extensions import db, ma

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    ma.init_app(app)

    return app
