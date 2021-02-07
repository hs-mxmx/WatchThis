from flask import request, jsonify
from database.models.suscribers_models import Suscribers
import json
from flask_cors import cross_origin, CORS


def init_suscribers(app):
    CORS(app)

    @app.route("/suscribers")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_suscribers():
        try:
            message = Suscribers.objects().to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any suscriber, try again later..."}
            return jsonify(message)
        return jsonify(message=message), 200

    @app.route('/suscriber/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_suscriber(id):
        try:
            message = Suscribers.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified suscriber, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/suscribers', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_suscriber_body():
        try:
            # Check json and raw data in bytes
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            suscriber = Suscribers(**body).save().to_json()
            message = {"Success": 'Suscriber created successfully!'}
            # suscriber = json.loads(suscriber)
        except Exception:
            message = {"Error": "Invalid suscriber data, try with another email or username!"}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/suscriber/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_suscriber(id):
        try:
            body = request.get_json()
            suscriber = Suscribers.objects.get(id=id).update(**body)
            suscriber = Suscribers.objects.get(id=id)
            message = {"Success": 'Suscriber updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected suscriber, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/suscribers/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_suscriber(id):
        try:
            suscriber = Suscribers.objects.get(id=id)
            Suscribers.objects.get(id=id).delete()
            message = {'Success': "Suscriber deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected suscriber, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
