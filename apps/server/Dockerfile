# ───── Build stage ─────
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps & generate Prisma client
COPY package*.json tsconfig.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Compile TypeScript
COPY src ./src
RUN npm run build    # outputs to dist/

# ───── Runtime stage ─────
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy prod files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist         ./dist
COPY --from=builder /app/prisma       ./prisma

EXPOSE 5000

# On container start: run migrations, then launch the server
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
