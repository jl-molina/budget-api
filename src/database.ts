import pg from "pg";

const sql = new pg.Pool({
    "host": "localhost",
    "port": 5432,
    "database": "budget",
    "user": "postgres",
    "password": "1234",
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
});

export default sql;