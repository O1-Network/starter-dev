# TODO: Implement authentication methods
from flask import Blueprint, jsonify, request, make_response
from server.app.settings import CONNECTION_HOST
from server.app.repositories import authentication
from psycopg2.errors import UniqueViolation


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
    except UniqueViolation as e:
        response = {"msg": "User email already exists"}
        return jsonify(response), 409
    except Exception as e:
        # TODO: Narrow down exception handling
        response = {"msg": "Internal Server Error"}
        return jsonify(response), 500
    
    response = {"msg": "User successfully created"}
    return jsonify(response), 201


@blueprint.route("/login", methods=["POST"])
def login():
    request_data = request.get_json()

    email = request_data.get('email', None)
    password = request_data.get('password', None)

    if not email or not password:
        response = {"msg": "Invalid request for user login"}
        return jsonify(response), 400

    # Establish connection and commit record
    try:
        login_successful = authentication.login(email, password)
    except Exception as e:
        # TODO: Narrow down exception handling
        response = {"msg": "Internal Server Error"}
        return jsonify(response), 500
    
    if not login_successful:
        response = {"msg": "User login failed"}
        return jsonify(response), 400

    response = {"msg": "User successfully logged in"}
    return jsonify(response), 200
    