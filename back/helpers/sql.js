const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ben',
  password: '',
  database: 'movieList'
});

connection.connect((err) => {
  if (!err) {
    console.log('sqlDB connected');
  } else {
    console.log('Error connecting database');
  }
});

module.exports = connection;
