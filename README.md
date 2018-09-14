# [Mealpal Ratings](https://mealpalratings.herokuapp.com/)

Description

* Powered by Javascript, node.js, Express.js, SQL, Object-relational Mapping (ORM), and Handlebars.js 

*Further design development underway.*

## Getting Started and Prerequisites

Check out the deployed site here: 
[**Mealpal Ratings**](https://mealpalratings.herokuapp.com/)!

This is a full-stack application, so no need to download anything!

### Preview 
<!-- take a picture of the image and add it into the readme  -->

![Mealpal Ratings](./preview.gif  "Mealpal Ratings")
*An example of the interface in action*

## Technology Used

* **HTML5, CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust DOM-oriented scripting library for Javascript
* [**node.js**](https://nodejs.org/en/) - a versatile Javascript runtime environment that processes user inputs in terminal
* [**mySQL**](https://www.mysql.com/) - a comprehensive open-source relational database system
* [**BootstrapCDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web framework utilized
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

Express.js allows a diversity of interactions in the backend. I leveraged Express's capabilities of producing JSON responses based on user input to create a unique API for this application. The user can view all "friends" who have visited the app and successfully completed the survey by visiting the specific route, "/api/friends" outlined in the *get* method. Additionally, the user may *post* new content to the JSON.

```Javascript


```


```Javascript

```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Express.js is a comprehensive node package that simplifies server functionality
* Router development through Express.js
* Object-relational mapping
* Utilizing JawsDB for Heroku deployment

## Developers

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
