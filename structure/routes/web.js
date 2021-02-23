const Route = require('../node_modules/framework/routes/route');
var route = new Route;

/*
* Write All your Custom Routes
* 
*
*
*/

route.get('/hello', "hello Mundo");

module.exports = route;
