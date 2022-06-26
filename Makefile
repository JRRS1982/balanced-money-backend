.DEFAULT_GOAL := up

.PHONY: dev
dev:
# nodemon
	npm run dev

.PHONY: up
up:
	$(MAKE) down
	docker-compose up -d
	$(MAKE) logs

.PHONY: down
down:
# down and clear dangling containers
	docker-compose down --remove-orphans

.PHONY: rebuild
rebuild:
	$(MAKE) down
	docker-compose build --no-cache
	$(MAKE) up

.PHONY: shell
shell: 
	docker exec -it balanced-money-backend sh

.PHONY: db-bash
db-bash:
	docker exec -it balanced-money-database bash

.PHONY: logs
logs:
	docker-compose logs -f --tail=100

.PHONY: docker-publish-image
docker-publish-image:
  # will need to be logged into docker cli client on terminal via `docker login -u jrrs1982`
	docker tag app:latest jrrs1982/balanced-money-backend:latest
	docker push jrrs1982/balanced-money-backend:latest

.PHONY: test
test:
# TODO want to have a test command to run tests on an encapsulated test db / service
	docker exec -it balanced-money-backend sh -c "npm run test -- -t '$(filter)'"
