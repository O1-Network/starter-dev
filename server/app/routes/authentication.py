# TODO: Implement authentication methods
from flask import Blueprint, jsonify, request, make_response
from server.app.settings import CONNECTION_HOST
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

    # TODO: Ensure email is unique

    # Establish connection and commit record
    try:
        connection = psycopg2.connect(
            database='development',
            user='development',
            password='development',
            host=CONNECTION_HOST,
        )
        connection.autocommit = True

        cursor = connection.cursor()        

        # Create user record in database
        command = f"INSERT INTO AUTHENTICATION (email, pwd, account_type) VALUES ('{email}', '{password}', '{account_type}')"
        cursor.execute(command)
        cursor.close()
    except Exception as e:
        # TODO: Narrow down exception handling
        response = {"msg": "Internal Server Error"}
        return jsonify(response), 500
    
    response = {"msg": "User successfully created"}
    return jsonify(response), 201