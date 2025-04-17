FROM node:18-alpine AS builder
WORKDIR /app

# ── install deps ──
COPY package*.json ./
RUN npm install

# ── copy source & build ──
COPY . .
RUN npm run build       # Next.js build
RUN npm prune --prod

# ── Runtime stage ──
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next          ./.next
COPY --from=builder /app/public         ./public
# (removed) COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]
