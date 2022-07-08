"""
Repo file for database interactions regarding authentication
"""
from psycopg2.errors import UniqueViolation
from server.app.models.user import User
from server.app.settings import CONNECTION_HOST
from server.app.clients.postgres import postgres_client

# TODO: Currently connection to psql is established on every function, connection pooling should be implemented

def signup(email: str, password: str, account_type: str) -> None:

    connection = postgres_client.get_connection()

    cursor = connection.cursor()        

    # Create user record in database
    command = f"INSERT INTO AUTHENTICATION (email, pwd, account_type) VALUES ('{email}', '{password}', '{account_type}')"

    try:
        cursor.execute(command)
    except UniqueViolation as e:
        postgres_client.put_connection(connection)
        raise e

    cursor.close()

    postgres_client.put_connection(connection)

def login(email: str, password: str) -> bool:
    
    connection = postgres_client.get_connection()

    cursor = connection.cursor()

    command = f"SELECT * FROM AUTHENTICATION WHERE email = '{email}' AND pwd = '{password}'"

    result: int

    try:
        cursor.execute(command)
        result = cursor.rowcount
    except Exception as e:
        raise e
    
    cursor.close()
    
    postgres_client.put_connection(connection)

    return result == 1