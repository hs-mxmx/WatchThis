from database.db import db


class Seasons(db.Document):
    name = db.StringField(required=True)
    episodes = db.ListField(db.StringField(), required=True)
