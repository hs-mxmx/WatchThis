from flask import Flask, Response
from database.db import initialize_db
from database.operations import episodes_operations, movies_operations, \
    series_operations, seasons_operations, users_operations, medialist_operations
from dotenv import load_dotenv
from pathlib import Path
import os


class App:

    # Flask app and db configuration
    app = Flask(__name__)
    app.debug = True
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

    app.run()
