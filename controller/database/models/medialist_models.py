from database.db import db


class MediaList(db.Document):
    name = db.StringField(required=True)
    medialist = db.ListField(db.StringField(), required=True)
