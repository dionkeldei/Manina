const Route = require('../node_modules/framework/routes/route');
var route = new Route;

/*
* Write All your Routes
*
*
*
*/

route.get('/hello', "hello Mundo");
route.post('/hello', "hello Mundo Post");

module.exports = route;
