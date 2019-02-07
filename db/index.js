const {Pool, Client} = require("pg");
const connectionString = 'postgresql://postgres@localhost:5432/socketchatDB'

const pool = new Pool({connectionString});



// const res = await pool.query('SELECT NOW()')


