from flask import request, jsonify
from database.models.users_models import Users
import json
from flask_cors import cross_origin, CORS


def init_users(app):
    CORS(app)

    @app.route("/users")
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_users():
        try:
            message = Users.objects().to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get any user, try again later..."}
            return jsonify(message)
        return jsonify(message=message), 200

    @app.route('/users/<id>', methods=['GET'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def get_user(id):
        try:
            message = Users.objects.get(id=id).to_json()
            # message = json.loads(message)
        except Exception:
            message = {"Error": "Couldn't get specified user, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/users', methods=['POST'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def add_users_body():
        try:
            # Check json and raw data in bytes
            body = request.get_data()
            body = body.decode('utf8').replace("'", '"')
            body = json.loads(body)
            user = Users(**body).save().to_json()
            message = {"Success": 'User created successfully!'}
            # user = json.loads(user)
        except Exception:
            message = {"Error": "Invalid user data, try with another email or username!"}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/users/<id>', methods=['PUT'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def update_users(id):
        try:
            body = request.get_json()
            user = Users.objects.get(id=id).update(**body)
            user = Users.objects.get(id=id)
            message = {"Success": 'User updated successfully!'}
        except Exception:
            message = {"Error": "Couldn't update selected user, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200

    @app.route('/users/<id>', methods=['DELETE'])
    @cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
    def delete_user(id):
        try:
            user = Users.objects.get(id=id)
            Users.objects.get(id=id).delete()
            message = {'Success': "User deleted successfully!"}
        except Exception:
            message = {"Error": "Couldn't delete selected user, try again later..."}
            return jsonify(message=message), 200
        return jsonify(message=message), 200
