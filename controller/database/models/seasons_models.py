from database.db import db


class Seasons(db.Document):
    type = db.StringField(required=True)
    name = db.StringField(required=True)
    episodes = db.ListField(db.StringField(), required=True)
    img_url = db.StringField(required=True)
    link = db.ListField(db.StringField(), required=True)
