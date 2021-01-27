from flask import request, jsonify
from database.models.seasons_models import Seasons
import json
from flask_cors import cross_origin, CORS


def init_seasons(app):
    CORS(app)

    @app.route("/seasons")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_seasons():
        try:
            message = Seasons.objects().to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any season, try again later..."}
            print(message)
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/seasons/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_season(id):
        try:
            message = Seasons.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified season, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/seasons', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_seasons_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            season = Seasons(**body).save().to_json()
            message = {"Success": 'Season created successfully!'}
            # episode = json.loads(episode)
        except Exception:
            message = {"Error": "Invalid season data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/seasons/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_seasons(id):
        try:
            body = request.get_json()
            season = Seasons.objects.get(id=id).update(**body)
            season = Seasons.objects.get(id=id)
            message = {"Success": 'Season updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected season, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/seasons/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_season(id):
        try:
            season = Seasons.objects(id=id)
            Seasons.objects.get(id=id).delete()
            message = {'Success': "Season deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected season, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
