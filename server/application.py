from server.app.flask_app import app
from server.app.scripts.setup_postgres import create_tables
import time

if __name__ == "__main__":
    # TODO: Implement readiness probe for database in development
    time.sleep(10)
    create_tables()
    app.run(host="0.0.0.0", port=3000, debug=False)
