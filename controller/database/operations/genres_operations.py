from flask import request, jsonify
from database.models.genres_models import Genres
import json
from flask_cors import cross_origin, CORS


def init_genres(app):
    CORS(app)

    @app.route("/genres")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_genres():
        try:
            message = Genres.objects().to_json()
            message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any genre, try again later..."}
            print(message)
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/genres/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_genre(id):
        try:
            message = Genres.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified genre, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/genres', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_genres_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            genre = Genres(**body).save().to_json()
            message = {"Success": 'Genre created successfully!'}
            # genre = json.loads(genre)
        except Exception:
            message = {"Error": "Invalid genre data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/genres/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_genres(id):
        try:
            body = request.get_json()
            genre = Genres.objects.get(id=id).update(**body)
            genre = Genres.objects.get(id=id)
            message = {"Success": 'Genre updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected genre, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/genres/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_genre(id):
        try:
            genres = Genres.objects(id=id)
            Genres.objects.get(id=id).delete()
            message = {'Success': "Genre deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected genre, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
