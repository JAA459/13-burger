var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableToInsert, newName, newDevour) {
    var queryString = "INSERT INTO ?? (burger_name, devour) VALUES(?,?)";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, newName, newDevour], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableToUpdate, colToUpdate, newColValue, colToSearch, colValue) {
    var queryString =
      "UPDATE ?? SET ?? to ?? WHERE ?? = ?";

    connection.query(
      queryString,
      [tableToUpdate, colToUpdate, newColValue, colToSearch, colValue],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;