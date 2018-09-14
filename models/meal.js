//Sajeel Malik
//Meal model based on the ORM

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var meal = {
    selectAll: function (cb) {
        orm.selectAll("meals", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
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
};

module.exports = meal;