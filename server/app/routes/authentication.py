# TODO: Implement authentication methods
from flask import Blueprint, jsonify, request, make_response
from server.app.settings import CONNECTION_HOST
from server.app.repositories import authentication
import psycopg2


blueprint = Blueprint('authentication', __name__)

@blueprint.route("/sign-up", methods=["POST"])
def signup():
    request_data = request.get_json()

    email = request_data.get('email', None)
    password = request_data.get('password', None)
    account_type = request_data.get('account_type', None)


    if not email or not password or not account_type:
        response = {"msg": "Invalid request for user sign up"}
        return jsonify(response), 400

    # Establish connection and commit record
    try:
        authentication.signup(email, password, account_type)
    except Exception as e:
        # TODO: Narrow down exception handling
        print(e)
        response = {"msg": "Internal Server Error"}
        return jsonify(response), 500
    
    response = {"msg": "User successfully created"}
    return jsonify(response), 201