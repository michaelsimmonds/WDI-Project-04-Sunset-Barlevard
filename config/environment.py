import os

secret = os.getenv('SECRET', 'secret boulevard')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/sunset-barlevard')

#if there is secret in env file, use that one, else use the other one. 
