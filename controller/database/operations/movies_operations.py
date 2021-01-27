from flask import request, jsonify
from database.models.movies_models import Movies
import json
from flask_cors import cross_origin, CORS


def init_movies(app):
    CORS(app)

    @app.route("/movies")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_movies():
        try:
            message = Movies.objects().to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any movie, try again later..."}
            print(message)
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/movies/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_movie(id):
        try:
            message = Movies.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified movie, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/movies', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_movies_body():
        try:
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            movie = Movies(**body).save().to_json()
            message = {"Success": 'Movie created successfully!'}
            # episode = json.loads(movie)
        except Exception:
            message = {"Error": "Invalid movie data, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/movies/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_movies(id):
        try:
            body = request.get_json()
            movie = Movies.objects.get(id=id).update(**body)
            movie = Movies.objects.get(id=id)
            message = {"Success": 'Movie updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected movie, try again later..."}
            return jsonify(message), 200
        return jsonify(message), 200

    @app.route('/movies/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_movie(id):
        try:
            movie = Movies.objects(id=id)
            Movies.objects.get(id=id).delete()
            message = {'Success': "Movie deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected movie, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
