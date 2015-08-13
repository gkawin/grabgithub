var React = require("react");
var Stylus = require("stylus");
require('node-jsx').install({
    extension: '.jsx'
});

var App = React.createElement(require("./js/react/components/App.jsx"));

module.exports.getIndex = function(request, reply) {

    reply.view('index', {
        markup: React.renderToString(App)
    });
}
