
/*
* ____   ___  _   _ _____ _____ ____
* |  _ \ / _ \| | | |_   _| ____/ ___|
* | |_) | | | | | | | | | |  _| \___ \
* |  _ <| |_| | |_| | | | | |___ ___) |
* |_| \_\\___/ \___/  |_| |_____|____/
*
*/

const Route = require('../node_modules/framework/routes/route');
const Database = require('../node_modules/framework/database/database');

var query = Database.query("CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));");
console.log(query);

var route = new Route;
/**/
/*
* Write All your Routes
*/

route.resource('/hello', "HelloController" );


/*******/
module.exports = route;
