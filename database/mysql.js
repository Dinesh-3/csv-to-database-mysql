const mysql      = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dinesh@3',
    database : "productdb"
  });
  
  
db.connect((err) => {
      if(err){
          throw new Error(err)
      }else{
          console.log("Database connected successfully");
      }
  
  });

let new_database = "CREATE DATABASE productdb"

db.query(new_database,(err,result) => {
      if(err){
        console.log("Database already created !!!");
      } 
      else{
          console.log(result);
          console.log("Database created successfully");
      }
  });

let table = 'CREATE TABLE products(id int , name VARCHAR(255), rating VARCHAR(255),RAM VARCHAR(255),ROM VARCHAR(255),price VARCHAR(255),PRIMARY KEY(id))';
db.query(table, (err, result) => {
    if(err){
        throw err
    }else{
        console.log(result);
        console.log('products table created...');
    } 
});

module.exports = db;
