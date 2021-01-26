from flask import request, Response
from database.models.users_models import Users
import json


def init_users(app):

    @app.route("/users")
    def get_users():
        try:
            users = Users.objects().to_json()
        except(Exception):
            message = {"Error": "Invalid get action for users, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(users, mimetype="application/json", status=200)

    @app.route('/users', methods=['POST'])
    def add_users_body():
        try:
            body = request.get_json()
            users = Users(**body).save().to_json()
            user = json.loads(users)
        except(Exception):
            message = {"Error": "Invalid add action request for users, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": user["_id"]["$oid"], "user": user["name"]}}

    @app.route('/users/<id>', methods=['PUT'])
    def update_users(id):
        try:
            body = request.get_json()
            Users.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for users, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"user": body["name"]}}

    @app.route('/users/<id>', methods=['DELETE'])
    def delete_user(id):
        try:
            Users.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for users, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/users/<id>', methods=['GET'])
    def get_user(id):
        try:
            users = Users.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected user, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(users, mimetype="application/json", status=200)
