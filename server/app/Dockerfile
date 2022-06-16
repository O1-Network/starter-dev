FROM python:3

# Set a directory for the app
WORKDIR /usr/src/app

# Copy all files into the container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r ./requirements.txt

# Run the command
CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]