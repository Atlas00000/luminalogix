# ── Build stage ──
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm prune --prod

# ── Runtime stage ──
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules  ./node_modules
COPY --from=builder /app/.next         ./.next
COPY --from=builder /app/public        ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000

# wrap in shell so $PORT is expanded
CMD ["sh", "-c", "npm start"]
