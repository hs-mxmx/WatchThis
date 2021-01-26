from flask import request, Response
from database.models.episodes_models import Episodes


def get_episodes():
    episodes = Episodes.objects().to_json()
    return episodes


def add_episodes_body():
    body = request.get_json()
    episode = Episodes(**body).save()
    return episode.id, episode


def update_episodes(id):
    body = request.get_json()
    Episodes.objects.get(id=id).update(**body)
    return body['name']


def delete_episode(id):
    Episodes.objects.get(id=id).delete()
    return id


def get_episode(id):
    episodes = Episodes.objects.get(id=id).to_json()
    return Response(episodes, mimetype="application/json", status=200)

