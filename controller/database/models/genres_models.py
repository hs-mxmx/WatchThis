from database.db import db


class Genres(db.Document):
    name = db.StringField(required=True)

