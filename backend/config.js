import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '46.202.166.22',
  user: 'root',
  password: 'Wingdev@420420',
  port: '3306',
  database: 'realitywing_db',
  waitForConnections: true, // Enable queueing
  connectionLimit: 100, // Set an appropriate limit
  charset: 'utf8mb4'
});

const connection = () => {
  return pool.getConnection();
};

export default connection;
