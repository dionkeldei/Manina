const Route = require('../node_modules/framework/routes/route');
var route = new Route;

/*
* Write All your Routes
*/

route.get('/hello', function () { return "hola Como estas"} );
route.post('/hello', function () { return "hola Como estas soy post"} );


/*******/
module.exports = route;
