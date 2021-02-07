from flask import request, jsonify
from database.models.medialist_models import MediaList
import json
from flask_cors import cross_origin, CORS


def init_medialists(app):
    CORS(app)

    @app.route('/medialists')
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_medialists():
        try:
            message = MediaList.objects().to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any medialist, try again later..."}
            print(message)
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/medialists/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_medialist(id):
        try:
            message = MediaList.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified medialist, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/medialists', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_medialists_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            medialist = MediaList(**body).save().to_json()
            message = {"Success": 'Medialist created successfully!'}
            # medialist = json.loads(movie)
        except Exception:
            message = {"Error": "Invalid medialist data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/medialists/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_medialists(id):
        try:
            body = request.get_json()
            medialist = MediaList.objects.get(id=id).update(**body)
            medialist = MediaList.objects.get(id=id)
            message = {"Success": 'Medialist updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected medialist, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/medialists/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_medialist(id):
        try:
            medialist = MediaList.objects(id=id)
            MediaList.objects.get(id=id).delete()
            message = {'Success': "Medialist deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected medialist, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
