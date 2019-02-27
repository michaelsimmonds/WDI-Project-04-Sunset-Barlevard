import os

secret = os.getenv('SECRET', 'shh, it\'s a secret')

#if there is secret in env file, use that one, else use the other on. os does operating system stuff.
