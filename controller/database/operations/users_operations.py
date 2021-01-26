from flask import request, Response
from database.models.users_models import Users


def get_users():
    users = Users.objects().to_json()
    return users


def add_users_body():
    body = request.get_json()
    user = Users(**body).save()
    return user.id, user


def update_users(id):
    body = request.get_json()
    Users.objects.get(id=id).update(**body)
    return body['name']


def delete_user(id):
    Users.objects.get(id=id).delete()
    return id


def get_user(id):
    users = Users.objects.get(id=id).to_json()
    return Response(users, mimetype="application/json", status=200)

