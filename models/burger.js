var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(colVals, condition, callback) {
    orm.updateOne("burgers", colVals, condition, function(res) {
      callback(res);
    });
  }
};


module.exports = burger;