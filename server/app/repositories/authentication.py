"""
Repo file for database interactions regarding authentication
"""
import psycopg2
from server.app.models.user import User
from server.app.settings import CONNECTION_HOST

# TODO: Currently connection to psql is established on every function, connection pooling should be implemented

def signup(email: str, password: str, account_type: str) -> None:

    user: User = User(email, password, account_type)

    if not get_user(user):
        return

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


def get_user(user: User) -> bool:

    connection = psycopg2.connect(
        database='development',
        user='development',
        password='development',
        host=CONNECTION_HOST,
    )
    connection.autocommit = True

    cursor = connection.cursor()        

    # Query 
    command = f"SELECT * FROM AUTHENTICATION WHERE email = {user.username}"
    cursor.execute(command)
    result = cursor.fetchone()
    cursor.close()
    return result
