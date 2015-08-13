var func = require("./modules");

module.exports = [ {
    method: 'GET',
    path: '/',
    config: {
        handler: func.getIndex
    }
}, {
    method: 'GET',
    path: '/public/{path*}',
    config: {
        auth: false,
        description: 'Static assets',
        handler: {
            directory: {
                path: '../public',
                index: false,
                listing: false
            }
        }
    }
}];
