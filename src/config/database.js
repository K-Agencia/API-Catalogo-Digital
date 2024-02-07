const mysql = require('mysql');
const dotenv = require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'kagencia_catalogodigital1'
})

exports.Query = async (sentencia, params) => {
  return await new Promise((resolve, reject) => {

    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      }
      else {
        connection.query(sentencia, params, (err, result, fields) => {
          resolve(result);
          connection.release();
          if (err) reject(err);
        })
      };
    })
  })
}