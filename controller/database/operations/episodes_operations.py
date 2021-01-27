from flask import request, Response
from database.models.episodes_models import Episodes
import json


def init_episodes(app):

    @app.route("/episodes")
    def get_episodes():
        episodes = Episodes.objects().to_json()
        return Response(episodes, mimetype="application/json", status=200)

    @app.route('/episodes', methods=['POST'])
    def add_episodes_body():
        try:
            body = request.get_json()
            episode = Episodes(**body).save().to_json()
            episode = json.loads(episode)
        except(Exception):
            message = {"Error": "Invalid add action request for episodes, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": episode["_id"]["$oid"], "episode": episode["name"]}}

    @app.route('/episodes/<id>', methods=['PUT'])
    def update_episodes(id):
        try:
            body = request.get_json()
            Episodes.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for episodes, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"episode": body["name"]}}

    @app.route('/episodes/<id>', methods=['DELETE'])
    def delete_episode(id):
        try:
            Episodes.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for episodes, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/episodes/<id>', methods=['GET'])
    def get_episode(id):
        try:
            episodes = Episodes.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected episode, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(episodes, mimetype="application/json", status=200)
