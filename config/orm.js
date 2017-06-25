var connection = require("../config/connection.js");


function addQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
  selectAll: function(tableInput, callback) {
    var query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  insertOne: function(table, cols, vals, callback) {
    var query = "INSERT INTO " + table;

    query += " (";
    query += cols.toString();
    query += ") ";
    query += "VALUES (";
    query += addQuestionMarks(vals.length);
    query += ") ";

    connection.query(query, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  updateOne: function(table, objColVals, condition, callback) {
    var query = "UPDATE " + table;

    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition;

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};


module.exports = orm;
