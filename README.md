# BlueTrust User Manager

Welcome to the **BlueTrust User Manager** application! 🚀

This project is a full-stack CRUD app built with:
- **React + Vite** for the frontend
- **Node.js + Express + Prisma** for the backend
- **PostgreSQL** as database
- **Docker** for containerization

---

## ✨ Features
- Manage user profiles with a modern UI (MUI DataGrid)
- Drawer-based form for creating new users
- Upload profile pictures
- REST API powered by Express

---

## 🚧 Before You Start
Make sure you have installed the following:
- `node` (>= 16.14)
- `npm` (>= 8.5)
- `docker` (>= 20.10)
- `docker-compose`
- `make`

---

## 🚀 Quickstart

```bash
make config           # Create your .env files from templates
make vendor           # Install dependencies for both backend and frontend
make up               # Launch the full stack (frontend + backend + DB)
```

Then, open your browser:
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3001/api/users](http://localhost:3001/api/users)

---

## 🚑 Docker Commands

| Command           | Description |
|------------------|-------------|
| `make ps`        | Show running containers |
| `make up`        | Start containers (optional: `svc=` param) |
| `make logs`      | Show logs of containers |
| `make stop`      | Stop containers (optional: `svc=` param) |
| `make rm`        | Remove containers (optional: `svc=` param) |
| `make rmup`      | Remove and restart all containers |
| `make exec svc=backend` | Open a shell into backend container |
| `make restart svc=frontend` | Restart a container |

---

## 📂 Project Commands

| Command                | Description |
|-----------------------|-------------|
| `make config`         | Copy `.env.dist` into `.env` in each subproject |
| `make vendor`         | Install all dependencies |
| `make migration-run`  | Run Prisma migrations |
| `make migration-revert` | Revert last migration |
| `make migration-generate name="MyMigration"` | Create a new Prisma migration |
| `make clean-db`       | Clear all data in the database |

---

## 🚀 First Time Setup

1. Clone the repository
2. Copy environment files
```bash
make config
```
> This will copy `.env.dist` into `.env` in `/backend`

3. Install dependencies
```bash
make vendor
```

4. Launch the app
```bash
make up
```

5. Done! You're good to go 

---

## 🚩 Notes
- Your database and all services are containerized via Docker.
- Code is split between `frontend/` and `backend/` folders.
- Prisma handles database schema and migrations.

---

## by Armel

