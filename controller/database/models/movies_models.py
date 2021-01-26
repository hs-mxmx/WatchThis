from database.db import db


class Movies(db.Document):
    name = db.StringField(required=True)
    description = db.StringField(required=True)
    director = db.StringField(required=True)
    duration = db.StringField(required=True)
    cast = db.ListField(db.StringField(), required=True)
