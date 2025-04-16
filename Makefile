# 📦 INSTALLATION
vendor:
	docker-compose exec backend npm install
	docker-compose exec frontend npm install

vendor-api:
	docker-compose exec backend npm install

vendor-web:
	docker-compose exec frontend npm install

# ⚙️ CONFIGURATION
config:
	cp backend/.env.dist backend/.env

# 🚀 DEV COMMANDS
dev:
	docker-compose up --build

up:
	docker-compose up -d --build

stop:
	docker-compose down

ps:
	docker-compose ps

logs:
	docker-compose logs -f

rm:
	docker-compose rm -sf

rmup:
	docker-compose rm -sf
	docker-compose up --build

restart:
	docker-compose restart

exec:
	docker-compose exec $(svc) sh

# 🧪 MIGRATIONS
migration-run:
	docker-compose exec backend npx prisma migrate dev

migration-revert:
	docker-compose exec backend npx prisma migrate reset

migration-generate:
	docker-compose exec backend npx prisma migrate dev --name $(name)

clean-db:
	docker-compose exec backend npx prisma migrate reset --force
