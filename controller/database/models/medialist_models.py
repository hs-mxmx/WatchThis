from database.db import db


class MediaList(db.Document):
    type = db.StringField(required=True)
    name = db.StringField(required=True)
    medialist = db.ListField(db.StringField(), required=True)
