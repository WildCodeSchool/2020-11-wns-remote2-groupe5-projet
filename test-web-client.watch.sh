#!/bin/bash
docker-compose -f docker-compose.test.web-client.yml -f docker-compose.test.web-client.watch.yml build \
&& docker-compose -f docker-compose.test.web-client.yml -f docker-compose.test.web-client.watch.yml run --rm test-web-client