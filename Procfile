web: python manage.py runserver 0.0.0.0:$PORT --noreload
web2: bin/start-pgbouncer-stunnel daphne project.asgi:application --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker -v2