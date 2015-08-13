var hapi = require("hapi");
var Path = require('path');
var Handlebars = require("handlebars");
var Routes = require("./src/routes");

var connection = {
  host: process.env.IP,
  port: process.env.PORT || 3000
}
var server = new hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  }
});

server.connection(connection);

server.views({
  engines: {
    html: Handlebars
  },
  relativeTo: __dirname,
  path: Path.join(__dirname, './src/templates'),
});

for (var idx in Routes) {
  server.route(Routes[idx]);
}

server.start();
