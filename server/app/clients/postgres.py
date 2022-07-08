from psycopg2 import pool
from psycopg2.pool import SimpleConnectionPool

from server.app.settings import CONNECTION_HOST
from typing import Any


class PostgresClient:

    pool: SimpleConnectionPool

    def __init__(self) -> None:
        try:
            self.pool = SimpleConnectionPool(
                minconn=1,
                maxconn=20,
                database='development',
                user='development',
                password='development',
                host=CONNECTION_HOST,
            )
        except Exception as e:
            raise e
    
    def get_connection(self) -> Any:
        return self.pool.getconn()

    def put_connection(self, connection) -> None:
        connection.commit()
        self.pool.putconn(connection)

postgres_client = PostgresClient()
