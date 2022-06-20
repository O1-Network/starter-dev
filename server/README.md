# Server

Hey! Underneath this directory you'll find a plethora of code pertaining to server oriented functionality. 


## Local Development Environment Setup
Setup PR: https://github.com/O1-Network/starter-dev/pull/82 

It is possible to bring up the entire backend stack (API + database) locally for integration testing with FE, testing API changes, etc. [Docker](https://docs.docker.com/) is leveraged in order to containerize the application into three [services](https://docs.docker.com/compose/compose-file/#the-compose-application-model): backend, adminer and database. Backend contains the Flask application that server the API. [Adminer](https://www.adminer.org/en/editor/) is a service that allows users to use a Web UI in order to query and manipulate data. Database is a service that contains [PostgreSQL](https://www.postgresql.org/docs/) for persistence. 

In order to bring up all services use the following

    docker-compose up
Specific services can also be targeted to be spun up by listing desired services in the following manner

    docker-compose up backend adminer
The example above will spin up the backend and adminer services but **NOT** the database service. A good use case for this is to bring up exclusively the database and adminer services while launching the backend separately in order to test API changes quickly without having to rebuild the application.

**Hosted Ports for Services**
|Port|Service|
|--|--|
|3000|backend|
|5432|database|
|8080|adminer|

## Setting Up Server Development Environment
As mentioned in the above section it is possible to launch the backend separately (not via Docker container) in order to test changes without having to rebuild. There are a few things that are needed in order to accomplish this. First [Python](https://www.python.org/downloads/) should be installed. Following this it is important to setup a [virtual environment](https://docs.python.org/3/library/venv.html) inside of the ./app directory. This virtual environment needs to have all of the appropriate packages in that are required by the project - this can be accomplished using the following

    pip install -r requirements.txt
Once all requirements have been installed you are free to make changes as desired to the application code. Once you are ready to test your changes and see them live directly launch the application using the following command

    python -m server.application
This command should be run from the base directory of the project.

