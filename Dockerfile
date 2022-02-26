############### Stage 1 - build the project
# use alpine version of node to keep the image size small as possible
FROM node:16-alpine AS build

# node docs recommend this
WORKDIR /usr/src/app

# docker caches per row as it builds, so copy those files which do not change often to the container first and following builds will not need copy as they are already cached by Docker.
COPY package*.json ./
COPY src tsconfig.json ./
RUN npm install
RUN npm run build

# TODO not sure about the stages - can i have a test / dev stage so test / dev is run in docker too.

############### Stage 2 - run the project
FROM build AS prod
EXPOSE 4000
# from stage 1, i.e. build take the code in the dist / package.json and copy to the container
COPY --from=build /usr/src/app/dist ./dist/
COPY --from=build /usr/src/app/package*.json ./
# npm ci will install exact versions from a package-lock file, and --production will only install dependencies, not dev dependencies. 
RUN npm ci --production && npm cache clean --force
# make sure user is not root which could have security consequences.
USER node
CMD ["node", "dist/index.js"]
