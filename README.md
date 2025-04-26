## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### Postgresql

Start docker instances with 

Locally start Docker and PgAdmin

1. Create a custom Docker network
This lets the containers resolve each other by name.

docker network create pg-network

🐘 2. Start PostgreSQL container on that network

docker run --name my-postgres \
  --network pg-network \
  -e POSTGRES_USER=... \
  -e POSTGRES_PASSWORD=.... \
  -e POSTGRES_DB=testdb \
  -p 5432:5432 \
  -d postgres

🖥️ 3. Start pgAdmin container on that network

docker run --name my-pgadmin \
  --network pg-network \
  -e PGADMIN_DEFAULT_EMAIL=... \
  -e PGADMIN_DEFAULT_PASSWORD=... \
  -p 8080:80 \
  -d dpage/pgadmin4
* You can now access pgAdmin at: http://localhost:8080

* Login with:
    * Email: user
    * Password: password

🔗 4. Connect pgAdmin to PostgreSQL using the container name
When adding a new server in pgAdmin:
* Name: anything you want (e.g. Local Postgres)
* Host name/address: my-postgres ← (this is the key!)
* Port: 5432
* Maintenance DB: postgres or testdb
* Username: postgres
* Password: password123
✅ Because both containers are on the same network, pgAdmin can reach Postgres using the container name my-postgres.

🧼 Optional Cleanup Tip:
If you’ve previously created containers with conflicting names or networks, you might want to clean up first:

docker stop my-postgres my-pgadmin
docker rm my-postgres my-pgadmin


To login on the website use user@nextmail.com 