/*
*
*|_ _| \ | |  _ \| ____\ \/ /
* | ||  \| | | | |  _|  \  /
* | || |\  | |_| | |___ /  \
*|___|_| \_|____/|_____/_/\_\
*/

const webRoutes = require('./routes/web');
const serverConfig = require('./config/server');
server = webRoutes;
server.port = serverConfig.port;
server.serve();
