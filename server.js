
const Hapi        = require('Hapi')
const Path        = require('path')
const Handlebars  = require('handlebars')
const Hoek        = require('hoek')

const Server      = new Hapi.Server()

//addd connection
Server.connection({
    labels: ['web'],
    host: process.env.IP || 'localhost',
    port: 8000,
    router: {},
})

const Web = Server.select('web')
Web.route({
  method: 'GET',
  path: '/b/{param*}',
  config: {
    auth: false,
  },
  handler: {
    directory: {
      path: 'build',
      listing: false
    }
  }
})

Server.start((err) => {

  if (err) { throw (err) }
})

// //setting view and template engine.
// Server.views({
//   engines: {
//     html: Handlebars
//   },
//   relativeTo: __dirname,
//   path: Path.join(__dirname, './src/templates'),
// })
//
// //setting routes.
// for (var idx in Routes) {
//   Server.route(Routes[idx])
// }
//
// Server.start()
