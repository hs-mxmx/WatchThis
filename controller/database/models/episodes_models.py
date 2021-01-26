from database.db import db


class Episodes(db.Document):
    name = db.StringField(required=True)
    description = db.StringField(required=True)
    duration = db.StringField(required=True)
    link = db.ListField(db.StringField(), required=True)
