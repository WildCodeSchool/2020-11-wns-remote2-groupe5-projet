#!/bin/bash
docker-compose -f docker-compose.test.web-client.yml build && docker-compose -f docker-compose.test.web-client.yml run --rm test-web-client