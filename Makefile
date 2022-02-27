.DEFAULT_GOAL := up

.PHONY: up
up:
	$(MAKE) down
	docker-compose up -d
	$(MAKE) logs

.PHONY: down
down:
	docker-compose down --remove-orphans

.PHONY: build
build:
	docker-compose build
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
