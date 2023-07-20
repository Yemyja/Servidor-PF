const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"ymey",
    host:"localhost",
    port: 5432,
    database: "salud_financiera"
});
module.exports= pool;
