import os

secret = os.getenv('SECRET', 'shh, it\'s a secret')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/sunset-barlevard')

#if there is secret in env file, use that one, else use the other on. os does operating system stuff.
