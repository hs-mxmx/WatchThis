from flask import request, jsonify
from database.models.episodes_models import Episodes
import json
from flask_cors import cross_origin, CORS


def init_episodes(app):
    CORS(app)

    @app.route("/episodes")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_episodes():
        try:
            message = Episodes.objects().to_json()
            message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any episode, try again later..."}
            print(message)
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/episodes/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_episode(id):
        try:
            message = Episodes.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified episode, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/episodes', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_episodes_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            episode = Episodes(**body).save().to_json()
            message = {"Success": 'Episode created successfully!'}
            # episode = json.loads(episode)
        except Exception:
            message = {"Error": "Invalid episode data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/episodes/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_episodes(id):
        try:
            body = request.get_json()
            episode = Episodes.objects.get(id=id).update(**body)
            episode = Episodes.objects.get(id=id)
            message = {"Success": 'Episode updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected serie, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/episodes/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_episode(id):
        try:
            episode = Episodes.objects(id=id)
            Episodes.objects.get(id=id).delete()
            message = {'Success': "Episode deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected episode, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
