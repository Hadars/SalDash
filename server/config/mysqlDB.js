var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  pool = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : '1234',
    database : 'salaryo_test'
  });
}

exports.get = function() {
  return pool;
}