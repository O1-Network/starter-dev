import psycopg2

connection=psycopg2.connect(database="database",user="username",password="secret",host="localhost")
cur=connection.cursor()