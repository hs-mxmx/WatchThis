from flask import request, jsonify
from database.models.series_models import Series
import json
from flask_cors import cross_origin, CORS
from observer import Informer


def init_series(app):
    CORS(app)
    observer = Informer()

    @app.route("/series")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_series():
        try:
            message = Series.objects().to_json()
            message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any serie, try again later..."}
            print(message)
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/series/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_serie(id):
        try:
            message = Series.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified serie, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/series', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_series_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            serie = Series(**body).save().to_json()
            message = {"Success": 'Serie created successfully!'}
            serie = json.loads(serie)
            genres = serie['genres']
            observer.send_mail('templates/media_templates.txt', serie['name'], genres[0], 'serie')

        except Exception:
            message = {"Error": "Invalid serie data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/series/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_series(id):
        try:
            body = request.get_json()
            serie = Series.objects.get(id=id).update(**body)
            serie = Series.objects.get(id=id)
            message = {"Success": 'Serie updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected serie, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/series/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_serie(id):
        try:
            serie = Series.objects(id=id)
            Series.objects.get(id=id).delete()
            message = {'Success': "Serie deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected serie, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
