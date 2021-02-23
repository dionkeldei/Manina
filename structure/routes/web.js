
/*
* ____   ___  _   _ _____ _____ ____
* |  _ \ / _ \| | | |_   _| ____/ ___|
* | |_) | | | | | | | | | |  _| \___ \
* |  _ <| |_| | |_| | | | | |___ ___) |
* |_| \_\\___/ \___/  |_| |_____|____/
*
*/

const Route = require('../node_modules/framework/routes/route');
var route = new Route;
/**/
/*
* Write All your Routes
*/

route.get('/hello', "index@HelloController" );
route.post('/hello', "store@HelloController" );


/*******/
module.exports = route;
