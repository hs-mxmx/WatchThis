from flask import request, Response
from database.models.series_models import Series
import json


def init_series(app):

    @app.route("/series")
    def get_series():
        try:
            series = Series.objects().to_json()
        except(Exception):
            message = {"Error": "Invalid get action for series, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(series, mimetype="application/json", status=200)

    @app.route('/series', methods=['POST'])
    def add_series_body():
        try:
            body = request.get_json()
            serie = Series(**body).save().to_json()
            serie = json.loads(serie)
        except(Exception):
            message = {"Error": "Invalid add action request for series, please check URL, METHOD, or data TYPE for request."}
            print(message)
            return message
        return {"Add action": {"id": serie["_id"]["$oid"], "serie": serie["name"]}}

    @app.route('/series/<id>', methods=['PUT'])
    def update_series(id):
        try:
            body = request.get_json()
            Series.objects.get(id=id).update(**body)
        except(Exception):
            message = {"Error": "Invalid update action for series, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Update action": {"serie": body["name"]}}

    @app.route('/series/<id>', methods=['DELETE'])
    def delete_serie(id):
        try:
            Series.objects.get(id=id).delete()
        except(Exception):
            message = {"Error": "Invalid delete action for series, please check URL and METHOD for request."}
            print(message)
            return message
        return {"Delete action": {"id": id}}

    @app.route('/series/<id>', methods=['GET'])
    def get_serie(id):
        try:
            series = Series.objects.get(id=id).to_json()
        except(Exception):
            message = {"Error": "Invalid get action for selected serie, please check URL and METHOD for request."}
            print(message)
            return message
        return Response(series, mimetype="application/json", status=200)
