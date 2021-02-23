/*
*
*|_ _| \ | |  _ \| ____\ \/ /
* | ||  \| | | | |  _|  \  /
* | || |\  | |_| | |___ /  \
*|___|_| \_|____/|_____/_/\_\
*/

const webRoutes = require('./routes/web');
const serverConfig = require('./config/server');
const findControllers = require('./node_modules/framework/controllers/findControllers');
var controllers = findControllers.get();
server = webRoutes;
server.port = serverConfig.port;
server.controllers = controllers;
server.serve();
