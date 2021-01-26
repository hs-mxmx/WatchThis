from flask import request, Response
from database.models.medialist_models import MediaList


def get_medias():
    medias = MediaList.objects().to_json()
    return medias


def add_medias_body():
    body = request.get_json()
    media = MediaList(**body).save()
    return media.id, media


def update_medias(id):
    body = request.get_json()
    MediaList.objects.get(id=id).update(**body)
    return body['name']


def delete_media(id):
    MediaList.objects.get(id=id).delete()
    return id


def get_media(id):
    medias = MediaList.objects.get(id=id).to_json()
    return Response(medias, mimetype="application/json", status=200)

