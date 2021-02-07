from flask import request, Response, jsonify
from database.models.users_models import Users
from database.models.suscribers_models import Suscribers
from flask_cors import cross_origin
import json


def init_manager(app):

    @app.route("/home", methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_login():
        try:
            message = {'Wrong credentials!'}
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            logged_user = json.loads(body)
            users = Users.objects().to_json()
            users = json.loads(users)
            for user in users:
                if user['email'] == logged_user['email'] \
                        and user['password'] == logged_user['password']:
                    message = {'Success': 'User {} was logged successfully! '.format(user['username'])}
                    break

            return jsonify(message=message), 200

        except Exception:
            message = {"Error": "Wrong credentials..."}
            print(message)
            return jsonify(message=message), 200
