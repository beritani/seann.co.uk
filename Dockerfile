FROM node:alpine as base

FROM base as build
WORKDIR /app
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile
COPY . .

# Build
RUN yarn build

# Remove dev dependencies
RUN npm prune --production

FROM base
WORKDIR /app

# Copy from build image
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]