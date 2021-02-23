const webRoutes = require('./routes/web');
const serverConfig = require('./config/server');
server = webRoutes;
server.port = serverConfig.port;
server.serve();
