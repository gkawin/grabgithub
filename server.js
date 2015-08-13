var hapi = require("hapi");
var Path = require('path');
var Handlebars = require("handlebars");
var Routes = require("./src/routes");

//connection setting.
var connection = {
  host: process.env.IP,
  port: process.env.PORT || 3000
}

//Set server
var server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

//addd connection
server.connection(connection);
//setting view and template engine.
server.views({
  engines: {
    html: Handlebars
  },
  relativeTo: __dirname,
  path: Path.join(__dirname, './src/templates'),
});

//setting routes.
for (var idx in Routes) {
  server.route(Routes[idx]);
}

server.start();
