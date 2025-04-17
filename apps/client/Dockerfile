FROM node:18-alpine AS builder
WORKDIR /app

# ── install deps ──
COPY package*.json ./
RUN npm install

# ── copy source & build ──
COPY . .
RUN npm run build
RUN npm prune --prod

# ── Runtime stage ──
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy runtime essentials
COPY --from=builder /app/node_modules     ./node_modules
COPY --from=builder /app/.next            ./.next
COPY --from=builder /app/public           ./public
COPY --from=builder /app/package*.json    ./     
# (optional) keep custom config
# COPY --from=builder /app/next.config.js  ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]
