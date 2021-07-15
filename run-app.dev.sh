#!/bin/sh
echo "WEB_CLIENT_PORT=$WEB_CLIENT_PORT"
echo "API_PORT=$API_PORT"
WEB_CLIENT_PORT=$WEB_CLIENT_PORT API_PORT=$API_PORT docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build