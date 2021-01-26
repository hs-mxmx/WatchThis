from database.db import db


class Users(db.Document):
    name = db.StringField(required=True)
    username = db.StringField(required=True)
    email = db.StringField(required=True)
    password = db.StringField(required=True)

