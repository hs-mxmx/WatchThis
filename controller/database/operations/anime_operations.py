from flask import request, jsonify
from database.models.anime_models import Animes
import json
from flask_cors import cross_origin, CORS
from observer import Informer


def init_animes(app):
    CORS(app)
    observer = Informer()

    @app.route("/animes")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_animes():
        try:
            message = Animes.objects().to_json()
            message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any anime, try again later..."}
            print(message)
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/animes/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_anime(id):
        try:
            message = Animes.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified anime, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/animes', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_animes_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            anime = Animes(**body).save().to_json()
            message = {"Success": 'Anime created successfully!'}
            anime = json.loads(anime)
            genres = anime['genres']
            observer.send_mail('templates/media_templates.txt', anime['name'], genres[0], 'anime')

        except Exception:
            message = {"Error": "Invalid anime data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/animes/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_animes(id):
        try:
            body = request.get_json()
            anime = Animes.objects.get(id=id).update(**body)
            anime = Animes.objects.get(id=id)
            message = {"Success": 'Anime updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected anime, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/animes/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_anime(id):
        try:
            anime = Animes.objects(id=id)
            Animes.objects.get(id=id).delete()
            message = {'Success': "Anime deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected anime, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
