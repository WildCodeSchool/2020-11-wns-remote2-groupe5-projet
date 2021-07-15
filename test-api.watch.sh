#!/bin/bash
docker-compose -f docker-compose.test.api.yml -f docker-compose.test.api.watch.yml build \
&& docker-compose -f docker-compose.test.api.yml -f docker-compose.test.api.watch.yml run --rm test-api