var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(newName, newDevour, cb) {
        orm.insertOne("burgers", newName, newDevour, function(res) {
            cb(res);
        });
    },

    update: function(colToUpdate, newColValue, colToSearch, colValue, cb) {
        orm.updateOne("burgers", colToUpdate, newColValue, colToSearch, colValue, function (res) {
            cb(res);
        });
    }


};

module.exports = burger;