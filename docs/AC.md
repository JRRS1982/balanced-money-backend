# Acceptance Criteria

CRUD

- [x] Can add a transaction via a gql request
- [x] Can update a transaction via a gql request
- [x] Can read all transactions via a gql request
- [x] Can delete a transaction via a gql request

---

Extra

- [ ] The application can handle multiple currencies
- [x] Use ts-node-dev - its faster to recompile then ts-node

---

Style / formatting / quality

- [x] The application has a consistent style / formatting tools to assist future development
- [x] Code is covered by unit and feature tests

---

Validation

- [ ] Can only add a transaction if i have been validated as the owner of that transaction - probably with Auth0
- [ ] Can only delete a transaction if i have been validated as the owner of that transaction - probably with Auth0
- [ ] Can only update a transaction if i have been validated as the owner of that transaction - probably with Auth0
- [ ] Can only read transactions if i have been validated as the owner of the transactions - probably with Auth0

---

Docker

- [x] The application is managed by docker containers to provide it an isolated environment
- [x] Explore if Docker volumes would be of use in persisting data
- [ ] Have the docker image published / maintained on Dockerhub
- [ ] Tests are run within an isolated docker environment, which includes a test database

---

Hosting

- [ ] The database is available to the backend application by being hosted online
- [ ] The application available to the frontend application by being hosted online
- [ ] Can add a transaction via a gql request on a public url
- [ ] Can delete a transaction via a gql request on a public url
- [ ] Can update a transaction via a gql request on a public url
- [ ] Can read all transactions via a gql request on a public url
