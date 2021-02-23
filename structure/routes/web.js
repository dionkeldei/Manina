const Route = require('../node_modules/framework/routes/route');
var route = new Route;

/*
* Write All your Routes
*/

route.get('/hello', "index@HelloController" );
route.post('/hello', "store@HelloController" );


/*******/
module.exports = route;
