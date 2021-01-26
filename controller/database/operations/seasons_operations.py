from flask import request, Response
from database.models.seasons_models import Seasons


def get_seasons():
    seasons = Seasons.objects().to_json()
    return seasons


def add_seasons_body():
    body = request.get_json()
    print(body)
    seasons = Seasons(**body).save()
    id = seasons.id
    return {'id': str(id)}, 200


def update_seasons(id):
    body = request.get_json()
    Seasons.objects.get(id=id).update(**body)
    return body['name']


def delete_seasons(id):
    Seasons.objects.get(id=id).delete()
    return id


def get_season(id):
    seasons = Seasons.objects.get(id=id).to_json()
    return Response(seasons, mimetype="application/json", status=200)
