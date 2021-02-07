from flask import Flask
from database.operations import episodes_operations, movies_operations, \
    series_operations, seasons_operations, users_operations, medialist_operations, \
    anime_operations, genres_operations, suscribers_operations, manager

from dotenv import load_dotenv
from pathlib import Path
from flask_mongoengine import MongoEngine
import os


db = MongoEngine()


def initialize_db(app):
    db.init_app(app)


class App:

    # Flask app and db configuration
    app = Flask(__name__)
    app.debug = True
    app.config['CORS_HEADERS'] = 'Content-Type'
    env_path = Path('./database') / '.env'
    load_dotenv(dotenv_path=env_path)

    host = os.getenv("DBLINK")
    app.config['MONGODB_SETTINGS'] = {
        'host': host
    }

    # Initialize db and factory routing
    initialize_db(app)
    episodes_operations.init_episodes(app)
    movies_operations.init_movies(app)
    series_operations.init_series(app)
    seasons_operations.init_seasons(app)
    users_operations.init_users(app)
    medialist_operations.init_medialists(app)
    anime_operations.init_animes(app)
    genres_operations.init_genres(app)
    suscribers_operations.init_suscribers(app)
    manager.init_manager(app)

    app.run()
