const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'database-1.cuqobydnrg3q.us-east-2.rds.amazonaws.com', 
    user:'pmuserrsl', 
    password: 'LqHAYZ5BucKTH69',
    connectionLimit: 50,
    database: 'default_schema'
});

export default async function querydb() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM VCIDB LIMIT 2");
      console.log(rows);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}