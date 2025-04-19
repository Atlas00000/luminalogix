# Luminalogix 📦

AI‑Powered Fashion Commerce Platform  
Full‑stack Next.js Frontend • Express API • PostgreSQL (Prisma) • Docker & Render Hosting

---

## 🎯 Project Overview

Luminalogix is a demo e‑commerce prototype that showcases:
- **AI‑Driven UX**: Personalized “Outfit Picks” and dynamic content  
- **Robust Auth**: JWT‑backed register/login with role‑based access (Admin/Staff/Customer)  
- **Scalable Data Layer**: PostgreSQL managed via Prisma ORM  
- **Auto‑Generated API Docs**: Swagger UI & downloadable OpenAPI spec  
- **Containerized Dev & Prod**: Docker Compose locally, Docker‑on‑Render in free tier  

---

## 🚦 Roadmap & Milestones

| Phase            | Scope & Features                                                                                                                                     | Status    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| **Phase 1 (MVP)**| • User auth (register/login) <br> • Role middleware (Admin/Staff) <br> • Health check <br> • Swagger UI & OpenAPI export <br> • Docker Compose setup | ✅ Done   |
| **Phase 2**      | • Product CRUD API & pages <br> • Collections & filters <br> • Shopping cart state (client + session) <br> • Journal/Stories feed                    | 🔜 Next   |
| **Phase 3**      | • Checkout & Stripe integration <br> • Order history & receipts <br> • Admin panel (product management)                                               | 🕒 Future |
| **Phase 4**      | • Performance & caching (Redis) <br> • Analytics dashboards <br> • Multi‑region deploy & CD                                                             | 🕒 Future |

---

## 📁 Folder Structure

```text
luminalogix/
├─ apps/
│  ├─ client/                   # Next.js frontend
│  │  ├─ public/                # Static assets
│  │  ├─ src/
│  │  │  ├─ app/                # Next.js app/router pages
│  │  │  ├─ components/         # Shared UI components
│  │  │  ├─ styles/             # Tailwind & globals
│  │  ├─ Dockerfile             # Frontend container build
│  │  ├─ package.json
│  │  └─ tsconfig.json
│  │
│  └─ server/                   # Express + Prisma API
│     ├─ prisma/                # schema.prisma & migrations
│     ├─ src/
│     │  ├─ controllers/        # Route handlers
│     │  ├─ services/           # Business logic
│     │  ├─ routes/             # Express routers
│     │  ├─ middleware/         # Auth, error handlers
│     │  ├─ utils/              # Helpers (hash, jwt)
│     │  └─ index.ts            # App entrypoint
│     ├─ Dockerfile             # Backend container build
│     ├─ package.json
│     └─ tsconfig.json
│
├─ docker-compose.yml           # Local dev: Postgres + API + Frontend
├─ README.md                    # This file
└─ render.yaml                  # Render.com infra‑as‑code
⚙️ Tech Stack
Frontend: Next.js 15, React 19, Framer‑Motion, Tailwind CSS, Zustand

Backend: Node.js, Express 5, Prisma 6, PostgreSQL

Auth: JWT (jsonwebtoken), bcryptjs

Docs: Swagger (swagger‑jsdoc, swagger‑ui‑express), Postman collection

Containerization: Docker, Docker Compose, free‑tier Render services

🛠 Local Development
Clone & Install

bash
Copy
Edit
git clone https://github.com/Atlas00000/luminalogix.git
cd luminalogix
Environment Files

Copy root .env.example → apps/server/.env

Copy root .env.example → apps/client/.env.local

Populate with your local values:

dotenv
Copy
Edit
# apps/server/.env
PORT=5000
DATABASE_URL="postgres://postgres:postgres@db:5432/luminalogix"
JWT_SECRET="super-secret-key"

# apps/client/.env.local
NEXT_PUBLIC_API_URL="http://localhost:5000"
Bring Up All Services

bash
Copy
Edit
docker compose up --build
Frontend → http://localhost:3000

API → http://localhost:5000/api/health

Swagger → http://localhost:5000/api/docs

Run Migrations

bash
Copy
Edit
cd apps/server
npx prisma migrate dev --name init
🌐 Free Hosting on Render.com
1. Postgres Database
Create Free PostgreSQL in Render → grab connection URL.

2. Backend Service
New Web Service → Docker → Root: apps/server → Dockerfile

Env Vars:

DATABASE_URL → Render Postgres URL

JWT_SECRET → your secret

(leave PORT unset)

3. Frontend Service
New Web Service → Docker → Root: apps/client → Dockerfile

Env Vars:

NEXT_PUBLIC_API_URL → https://<your-backend>.onrender.com

4. Auto‑Run Migrations on Startup
Our backend Dockerfile’s CMD already runs:

bash
Copy
Edit
npx prisma migrate deploy && node dist/index.js
so your hosted DB is always up‑to‑date.

🤝 API Reference

Method	Endpoint	Description
POST	/api/auth/register	Register new user (201)
POST	/api/auth/login	Log in user (200)
GET	/api/protected/dashboard	Customer dashboard (200)
GET	/api/protected/admin	Admin‑only (200)
GET	/api/protected/staff	Staff/Admin (200)
GET	/api/health	Health check (200)
GET	/api/docs	Swagger UI
📚 Resources
OpenAPI JSON: /api/docs-json

Postman: luminalogix.postman_collection.json

Prisma schema: apps/server/prisma/schema.prisma