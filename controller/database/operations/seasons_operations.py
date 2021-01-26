from flask import request, Response
from database.models.seasons_models import Seasons
import json


def init_seasons(app):

    @app.route("/seasons")
    def get_seasons():
        try:
            seasons = Seasons.objects().to_json()
        except(Exception):
            message = {"Error": "Invalid get action for seasons, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(seasons, mimetype="application/json", status=200)

    @app.route('/seasons', methods=['POST'])
    def add_seasons_body():
        try:
            body = request.get_json()
            season = Seasons(**body).save().to_json()
            season = json.loads(season)
        except(Exception):
            message = {"Error": "Invalid add action request for seasons, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": season["_id"]["$oid"], "season": season["name"]}}

    @app.route('/seasons/<id>', methods=['PUT'])
    def update_seasons(id):
        try:
            body = request.get_json()
            Seasons.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for seasons, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"season": body["name"]}}

    @app.route('/seasons/<id>', methods=['DELETE'])
    def delete_season(id):
        try:
            Seasons.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for seasons, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/seasons/<id>', methods=['GET'])
    def get_season(id):
        try:
            seasons = Seasons.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected season, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(seasons, mimetype="application/json", status=200)
