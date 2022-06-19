import os
from dotenv import load_dotenv


load_dotenv(verbose=True)

# Load environment variables
DOCKER = os.getenv("DOCKER", default=None)


# Settings logic
if DOCKER:
    CONNECTION_HOST = 'database'
else:
    CONNECTION_HOST = 'localhost'