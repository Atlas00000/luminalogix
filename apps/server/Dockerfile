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
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Removed: COPY .env.docker .env  (env comes from docker‑compose)
EXPOSE 5000
CMD ["node", "dist/index.js"]
