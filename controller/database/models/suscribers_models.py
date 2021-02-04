from database.db import db


class Suscribers(db.Document):
    email = db.StringField(required=True, unique=False)
    genre = db.StringField(required=True)
