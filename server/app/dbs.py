import time
import random

from sqlalchemy import create_engine

db_name = 'database'
db_user = 'username'
db_pass = 'secret'
db_host = 'localhost'
db_port = '5432'

# Connecto to the database
db_string = 'postgresql://username:secret@localhost:5432/database'
# .format(db_user, db_pass, db_host, db_port, db_name)
db = create_engine(db_string)

def add_new_row(n):
    # Insert a new number into the 'numbers' table.
    db.execute("INSERT INTO numbers (number,timestamp) "+\
        "VALUES (" + str(n) + "," + str(int(round(time.time() * 1000))) + ");")

def get_last_row():
    # Retrieve the last number inserted inside the 'numbers'
    query = "" + \
            "SELECT number " + \
            "FROM numbers " + \
            "WHERE timestamp >= (SELECT max(timestamp) FROM numbers)" +\
            "LIMIT 1"

    result_set = db.execute(query)  
    for (r) in result_set:  
        return r[0]

if __name__ == '__main__':
    print('Application started')
    
    while True:
        time.sleep(5)
        add_new_row(random.randint(1,100000))
        print('The last value insterted is: {}'.format(get_last_row()))