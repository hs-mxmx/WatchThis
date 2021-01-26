from flask import request, Response
from database.models.medialist_models import MediaList
import json


def init_medialists(app):

    @app.route('/medialists')
    def get_medialists():
        try:
            medialists = MediaList.objects().to_json()
        except(Exception):
            message = {"Error": "Invalid get action for medialists, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(medialists, mimetype="application/json", status=200)

    @app.route('/medialists', methods=['POST'])
    def add_medialists_body():
        try:
            body = request.get_json()
            medialists = MediaList(**body).save().to_json()
            medialist = json.loads(medialists)
        except(Exception):
            message = {"Error": "Invalid add action request for medialists, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": medialist["_id"]["$oid"], "medialist": medialist["name"]}}

    @app.route('/medialists/<id>', methods=['PUT'])
    def update_medialists(id):
        try:
            body = request.get_json()
            MediaList.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for medialists, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"medialist": body["name"]}}

    @app.route('/medialists/<id>', methods=['DELETE'])
    def delete_medialist(id):
        try:
            MediaList.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for medialists, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/medialists/<id>', methods=['GET'])
    def get_medialist(id):
        try:
            medialists = MediaList.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected medialist, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(medialists, mimetype="application/json", status=200)
