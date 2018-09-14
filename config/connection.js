//Sajeel Malik
//Database Connection

// Set up MySQL connection.
var mysql = require("mysql");

//Original: MySQL database connection

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "mealpalDB"
// });

//Updated: initialize connection to JAWS DB for database connection via Heroku
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
    
      user: "root",
    
      password: "password",
      database: "mealpalDB"
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
