//Sajeel Malik
//Meal model based on the ORM

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// create "meal" model that calls on ORM methods
var meal = {
    selectAll: function (cb) {
        orm.selectAll("meals", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("meals", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("meals", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("meals", condition, function (res) {
            cb(res);
        });
    }

};

module.exports = meal;