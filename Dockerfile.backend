FROM python:3

# Set a directory for the app
WORKDIR /usr/src/app

# Copy all files into the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r ./server/app/requirements.txt

# Pick port to run on
EXPOSE 3000

# Run the command
CMD ["python", "-m", "server.application"]