import psycopg2
import random
import string
import time

from server.app.settings import CONNECTION_HOST

SAMPLE_RECORD_COUNT = 100
LETTERS = string.ascii_letters

# Sample file to fill postgres with some mock data at start up

def create_tables():
    try:
        print("LOADING TABLES")
        commands = [
            "CREATE TABLE sample (sample_id SERIAL PRIMARY KEY, sample_data VARCHAR(255) NOT NULL)"
        ]

        # Establish Database connection
        connection = psycopg2.connect(
            database='development',
            user='development',
            password='development',
            host=CONNECTION_HOST,
        )
        connection.autocommit = True

        cursor = connection.cursor()

        for command in commands:
            cursor.execute(command)

        # Generate some sample records
        for record_idx in range(0, SAMPLE_RECORD_COUNT):
            sample_id = record_idx
            sample_data = ''.join(random.choice(LETTERS) for i in range(10))

            cursor.execute(
                f"INSERT INTO sample (sample_id, sample_data) VALUES ({sample_id}, '{sample_data}')"
            )
            time.sleep(0.01)

        cursor.close()
        print("TABLES LOADED")
    except Exception as e:
        print("Error loading tables, do tables already exist? Consider rebuilding images.")
