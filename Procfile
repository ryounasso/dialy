release: python3 manage.py migrate
release: python3 manage.py createsuperuser
web: gunicorn daily_api.wsgi --log-file -