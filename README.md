# [Mealpal Ratings](https://mealpalratings.herokuapp.com/)

Interactively add your favorite Mealpal meals from your favorite restaurants to see which meals are truly **worth it!** Rate your meals by how they taste and by whether or not their portion size and price is worthwhile; remember, a great tasting meal may not be worth it!

Mealpal Ratings is a Full-Stack Application! 

* Powered by Javascript, node.js, Express.js, SQL, Object-relational Mapping (ORM), and Handlebars.js. Utilizes MVC and RESTful architecture.

*Further design development underway.*
#

## Getting Started and Prerequisites

Check out the deployed site here: 
[**Mealpal Ratings**](https://mealpalratings.herokuapp.com/)!

This is a full-stack application, so no need to download anything!

### Preview 
<!-- take a picture of the image and add it into the readme  -->

#### Landing Page

![Mealpal Ratings](https://raw.githubusercontent.com/sajeelmalik/Mealpal-Ratings/master/public/assets/previewv2.png "Mealpal Ratings")

#### Demo

![Mealpal Ratings](./public/assets/preview.gif  "Mealpal Ratings")
*An example of the interface in action*


# Technology Used

* **HTML5, CSS3** 
* **Javascript** - the primary scripting logic powering the application
* **jQuery** - the robust DOM-oriented scripting library for Javascript
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal
* [**mySQL**](https://www.mysql.com/) - a comprehensive open-source relational database system
* [**UIKit**](https://getuikit.com/docs/) - a secondary web design framework utilized for animations


## Node Packages Employed

1. Express - unopinionated web framework for Node.js that constructs server logic and powers the API
``` require("express"); ```
2. MySQL - a comprehensive open-source relational database system
``` require("mysql"); ```
3. Handlebars - provides the power to build semantic templates effectively through Express
``` require("express-handlebars"); ```
4. Body Parser - middleware technology for JSON formatting
``` require("body-parser"); ```
5. Path - simplifies directories and filepaths through Node
``` require("path"); ```

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Object-relational mapping proved to be a challenging aspect of this project. Though it provided a unique, customizable framework to interact with SQL databased, the web of callback functions that were required demonstrated the technical difficulty of maintaining clean ORMs. Below, the general overlay of the orm is shown. SQL logic is utilized to generate an adaptable, concatenated *querystring*,  and the *cb* refers to a callback function that will be passed one level upwards, at the **meal.js model** (see repository under /models).

```Javascript
var connection = require("./connection.js");

//NOTE: helper functions not shown in this snippet

var orm = {
    //select all method for the ORM using callbacks
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insert/add method for the ORM using callbacks
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },
    //update method for the ORM using callbacks
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

```
Handlebars.js was a new and unique technology that allowed me to directly render HTML onto the page while inputting specific data to the route. Here, I sent the JSON data from the Meals API to the handlebars framework, *index.html*.
```Javascript
var meal = require("../models/meal.js");


router.get("/", function(req, res) {
    meal.selectAll(function(data) {
      var hbsObject = {
        meals: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
```
Utilizing the JSON - a data structure that presents an array of objects - that was routed to the root, I was able to iteratively produce HTML elements that outputted unique data based on specific attributes of each individual object within the array.
```HTML
<h4>
    {{name}}, <em>{{restaurant}}</em> <span class="uk-label uk-label-success">Rating: {{flavor_rating}}</span>
</h4>
<div class="uk-flex uk-flex-center">

    <button class="uk-button uk-button-danger change-worth" data-id="{{id}}" data-worth="{{worth_it}}">
        {{#if worth_it}}It's worth it!{{else}}It's not worth it!{{/if}}
    </button>

    <button class="uk-button uk-button-danger delete-meal" data-id="{{this.id}}">DELETE!</button>

</div>
```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Express.js is a comprehensive node package that simplifies server functionality
* Router development through Express.js - while server functionality and execution is simpified, complex routing trees need to be delineated for proper funcitonality
* Object-relational mapping presented enormous difficulties in the initial stages of development. While its utility is apparent, more advanved technology like Sequelize may expedite the process of creating relational frameworks. Having to utilize multiple callback functions precludes the ability to write clean, readable code.
* Handlebars.js was a unique way to directly interact with JSON data using HTML.
* Utilizing JawsDB for Heroku deployment

## Developers

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
