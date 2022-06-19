import psycopg2
from flask import Flask
from server.app.settings import CONNECTION_HOST


app = Flask(__name__)


@app.route('/')
def hello_world():

    # Establish Database connection
    connection = psycopg2.connect(
        database='development',
        user='development',
        password='development',
        host=CONNECTION_HOST,
    )

    cursor = connection.cursor()

    cursor.execute("SELECT * FROM sample")
    rows = cursor.fetchall()

    cursor.close()
    connection.close()
    
    return ', '.join(map(str, rows)) if len(rows) > 0 else "Empty"
