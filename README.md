Luminalogix 🧠🛍️
AI-Powered E-commerce Experience for Fashion and Lifestyle

Luminalogix is a cutting-edge AI-driven retail platform combining immersive UI/UX, intelligent product recommendations, seamless checkout, and robust backend infrastructure for modern online commerce. Built for scalability, personalization, and performance — it’s a learning-driven full-stack project.

📌 Table of Contents
Project Overview

Tech Stack

Development Phases

Core Features

Folder Structure

Setup Instructions

Contributors

License

🌍 Project Overview
Luminalogix is a simulated e-commerce ecosystem designed to mimic professional platforms like ASOS, Allbirds, and Aesop, using AI and modern frontend/backend technologies.

The system includes:

A fully responsive frontend with immersive user experience

A backend powered by Node.js, Express, and Prisma

A PostgreSQL database and JWT-based user authentication

Future support for AI-based product recommendations, virtual try-ons, and AR/VR commerce tools

⚠️ Note: While product and company details are fabricated for academic purposes, development follows real-world best practices.

🧰 Tech Stack
🖥 Frontend (Client)

Next.js (App Router)

TypeScript

TailwindCSS (Custom Theme)

Framer Motion (Animations)

🧠 Backend (Server)

Node.js + Express

TypeScript

Prisma (ORM)

PostgreSQL

JWT + bcryptjs for Authentication

Zod (planned) for request validation

☁️ DevOps & Hosting

Vercel (Frontend)

Railway / Render / Docker (Backend API)

pgAdmin / Prisma Studio for DB inspection

🏗️ Development Phases
Each phase is scoped to either the frontend or backend and builds toward a complete MVP → Growth → Optimization cycle.

🖼 Frontend Phases
🎬 UI Foundation

Hero section with animated video & welcome text

Responsive navigation with dropdown

Footer with social/media links

🧩 Pages & Routing

Setup of: Home, About, Shop, Contact, Journal, Collections

Responsive design with smooth scroll & transitions

🛒 E-commerce Features (Planned)

Product grid, detail pages, cart & checkout UI

AR/AI styling widget (planned with WebAR)

🧠 AI & Personalization (Planned)

Personalized homepage with AI-based curation

Virtual try-on preview

🛠 Backend Phases
⚙️ Phase 1: Core Setup & Auth (Completed)

Project scaffolded under apps/server

PostgreSQL connection via Prisma

Auth service: register, login

Password hashing with bcryptjs

JWT signing & verification

Middleware for protected routes

🛂 Phase 2: Role-Based Access (Planned)

Middleware for admin/customer roles

Authorization guard on sensitive endpoints

📦 Phase 3: Product & Order Models

Product CRUD endpoints

Category & Inventory logic

Order creation + user linkage

🧾 Phase 4: Transactions & Payments

Stripe integration

Secure checkout session management

📊 Phase 5: Analytics, Logs & Monitoring (Planned)

🔑 Core Features

Category	Feature
Authentication	Register, Login (JWT-based)
Security	Bcrypt password hashing
Access Control	Protected Routes with Middleware
Database ORM	Prisma for PostgreSQL
UI/UX	Animated hero, responsive navbar
Routing	Frontend pages (Shop, About, Contact)
Architecture	Scalable monorepo layout with apps/
📁 Folder Structure (Monorepo)
luminalogix/ │ ├── apps/ │ ├── client/ # Frontend (Next.js) │ │ └── src/ │ │ ├── components/ │ │ ├── pages/ │ │ └── styles/ │ └── server/ # Backend (Express API) │ ├── src/ │ │ ├── controllers/ │ │ ├── routes/ │ │ ├── services/ │ │ ├── middleware/ │ │ └── utils/ │ └── prisma/ # Prisma schema & migrations │ ├── README.md └── package.json (workspace root)

🚀 Setup Instructions
Clone the repo:

bash git clone https://github.com/yourname/luminalogix.git cd luminalogix

Install dependencies (monorepo):

bash npm install

Setup PostgreSQL & Prisma:

Create a database named luminalogix

Fill in apps/server/.env:

DATABASE_URL="postgresql://<user>@localhost:5432/luminalogix"

Then run:

bash cd apps/server npx prisma migrate dev --name init

Start backend server:

bash npm run dev

Start frontend (client):

bash cd apps/client npm run dev

🙋 Contributors
This project is developed by Celestine Emili for educational & portfolio purposes.
Feel free to fork or suggest improvements.

📄 License
This project is open-sourced under the MIT License.

