from flask import request, Response
from database.models.movies_models import Movies


def get_movies():
    movies = Movies.objects().to_json()
    return movies


def add_movies_body():
    body = request.get_json()
    movie = Movies(**body).save()
    return movie.id, movie


def update_movies(id):
    body = request.get_json()
    Movies.objects.get(id=id).update(**body)
    return body['name']


def delete_movie(id):
    Movies.objects.get(id=id).delete()
    return id


def get_movie(id):
    movies = Movies.objects.get(id=id).to_json()
    return Response(movies, mimetype="application/json", status=200)

