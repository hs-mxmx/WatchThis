from flask import request, Response
from database.models.movies_models import Movies
import json


def init_movies(app):

    @app.route("/movies")
    def get_movies():
        try:
            movies = Movies.objects().to_json()
        except(Exception):
            message = {"Error": "Invalid get action for movies, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(movies, mimetype="application/json", status=200)

    @app.route('/movies', methods=['POST'])
    def add_movies_body():
        try:
            body = request.get_json()
            movie = Movies(**body).save().to_json()
            movie = json.loads(movie)
        except(Exception):
            message = {"Error": "Invalid add action request for movies, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": movie["_id"]["$oid"], "movie": movie["name"]}}

    @app.route('/movies/<id>', methods=['PUT'])
    def update_movies(id):
        try:
            body = request.get_json()
            Movies.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for movies, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"movie": body["name"]}}

    @app.route('/movies/<id>', methods=['DELETE'])
    def delete_movie(id):
        try:
            Movies.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for movies, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/movies/<id>', methods=['GET'])
    def get_movie(id):
        try:
            movies = Movies.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected movie, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(movies, mimetype="application/json", status=200)
