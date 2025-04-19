# Luminalogix 📦

AI‑Powered Fashion Commerce (Next.js Frontend + Express API + Postgres)

---

## 🎯 Project Overview

Luminalogix is a full‑stack, AI‑driven e‑commerce prototype showcasing:
- **Personalized UX** via AI recommendations  
- **Dynamic Content** with server‑ and client‑side rendering  
- **Secure Auth** (JWT + bcrypt) with role‑based access  
- **Robust Data Layer** (PostgreSQL + Prisma)  
- **Automated API Docs** (Swagger + Postman)  
- **Dockerized** for local dev & free‑tier hosting

---

## 🚦 Roadmap & Milestones

| Phase               | Description                                       | Status     |
|---------------------|---------------------------------------------------|------------|
| **Phase 1 (MVP)**   | • User Auth (register/login) <br> • Health check <br> • Role middleware <br> • Swagger UI <br> • Postman collection | ✅ Done    |
| **Phase 2**         | • Products CRUD <br> • Collections API <br> • Cart & session management <br> • Front‑end product pages | 🔜 Next    |
| **Phase 3**         | • Checkout integration (Stripe) <br> • Order history <br> • Admin dashboard <br> • Webhooks | 🕒 Future |
| **Phase 4**         | • Optimization & scaling (Redis cache, queue) <br> • Analytics dashboards <br> • Multi‑region deployment | 🕒 Future |

---

## 📁 Folder Structure

luminalogix/ │ ├─ apps/ │ ├─ client/ # Next.js frontend │ │ ├─ public/ # static assets │ │ ├─ src/ │ │ │ ├─ app/ # Next.js pages/components │ │ │ ├─ components/ # shared UI │ │ │ ├─ styles/ # Tailwind & global CSS │ │ ├─ Dockerfile │ │ ├─ package.json │ │ └─ tsconfig.json │ │ │ └─ server/ # Express + Prisma API │ ├─ prisma/ # schema & migrations │ ├─ src/ │ │ ├─ controllers/ # HTTP → logic │ │ ├─ services/ # business logic │ │ ├─ routes/ # Express routers │ │ ├─ middleware/ # auth, error handling │ │ ├─ utils/ # hash, jwt helpers │ │ └─ index.ts # app entrypoint │ ├─ Dockerfile │ ├─ package.json │ └─ tsconfig.json │ ├─ prisma/ # optional root‑level schema (if used) ├─ docker-compose.yml # local multi‑container setup ├─ README.md # ← you’re reading this └─ render.yaml # Render.com infra as code

yaml
Copy
Edit

---

## ⚙️ Tech Stack

- **Frontend:** Next.js 15, React 19, Framer‑Motion, Tailwind CSS, Zustand  
- **Backend:** Node.js, Express 5, Prisma 6, PostgreSQL  
- **Auth:** JWT (jsonwebtoken), bcryptjs  
- **Docs:** Swagger (swagger-jsdoc, swagger-ui‑express), Postman  
- **Containers:** Docker, docker‑compose  
- **Hosting:** Render (free web services + Postgres), Vercel/Neon (alternative)

---

## 🛠 Local Development

1. **Clone & install root deps**  
   ```bash
   git clone https://github.com/Atlas00000/luminalogix.git
   cd luminalogix
Env files

Copy .env.example → apps/server/.env and set:

ini
Copy
Edit
DATABASE_URL="postgres://postgres:postgres@db:5432/luminalogix"
JWT_SECRET="YOUR_SECRET"
PORT=5000
Copy .env.example → apps/client/.env.local and set:

ini
Copy
Edit
NEXT_PUBLIC_API_URL="http://localhost:5000"
PORT=3000
Start with Docker

bash
Copy
Edit
docker compose up --build
Frontend → http://localhost:3000

Backend → http://localhost:5000/api/health

API Docs

Swagger UI → http://localhost:5000/api/docs

OpenAPI JSON → curl http://localhost:5000/api/docs-json > openapi.json

Run Migrations

bash
Copy
Edit
cd apps/server
npx prisma migrate dev --name init
🌐 Free Hosting on Render.com
Push code to GitHub.

Backend Service

Create Web Service → Docker → Root: apps/server → Dockerfile

Env Vars: set DATABASE_URL, JWT_SECRET

Postgres Database

Create a free database → copy its connection string → assign to backend’s DATABASE_URL

Frontend Service

Create Web Service → Docker → Root: apps/client → Dockerfile

Env Vars: NEXT_PUBLIC_API_URL=https://<backend-url>

Start Command: npm start (Dockerfile handles sh -c)

Run Prisma Migrations

In Backend’s Render Shell: npx prisma migrate deploy

🤝 API Endpoints

Method	Path	Description
POST	/api/auth/register	Register user (201)
POST	/api/auth/login	Login user (200)
GET	/api/protected/dashboard	Dashboard (auth required)
GET	/api/protected/admin	Admin only
GET	/api/protected/staff	Staff/Admin
GET	/api/health	Health check (public)
GET	/api/docs	Swagger UI
📚 Resources & References
Prisma Schema & Migrations → apps/server/prisma/schema.prisma

Swagger Annotations → in apps/server/src/routes/*.ts

Postman Collection → luminalogix.postman_collection.json