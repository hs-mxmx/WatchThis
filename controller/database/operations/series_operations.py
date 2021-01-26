from flask import request, Response
from database.models.series_models import Series


def get_series():
    series = Series.objects().to_json()
    return series


def add_series_body():
    body = request.get_json()
    series = Series(**body).save()
    id = series.id
    return {'id': str(id)}, 200


def update_series(id):
    body = request.get_json()
    Series.objects.get(id=id).update(**body)
    return body['name']


def delete_serie(id):
    Series.objects.get(id=id).delete()
    return id


def get_serie(id):
    series = Series.objects.get(id=id).to_json()
    return Response(series, mimetype="application/json", status=200)

