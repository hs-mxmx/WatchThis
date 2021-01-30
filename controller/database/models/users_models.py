from database.db import db


class Users(db.Document):
    name = db.StringField(required=True)
    username = db.StringField(required=True, unique=True)
    email = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)
    img_url = db.StringField(required=True)