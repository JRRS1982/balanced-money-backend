############### Stage 1 - build the project
# use alpine version of node to keep the image size small as possible
FROM node:16-alpine AS build

WORKDIR /app

# docker caches per row as it builds, so copy those files which do not change often to the container first and following builds will not need copy as they are already cached by Docker.
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./

# install all npm modules (i.e. not production)
RUN npm install
RUN npm run build

############### Stage 2 - run the project
FROM build AS prod
# need to re-establish the WORKDIR
WORKDIR /app

# from stage 1, i.e. build copy packages
COPY --from=build /app/package*.json ./

# not sure about the dist - we could copy it, but npm ci is doing the production only install below.
COPY --from=build /app/dist ./dist/


# npm ci will install exact versions from a package-lock file to ensure we are specific about what we install in production, and --production will only install dependencies, not dev dependencies. 
RUN npm ci --production && npm cache clean --force

# user should not be left as root - which would have security consequences
USER node
EXPOSE 4000
CMD ["node", "dist/index.js"]
