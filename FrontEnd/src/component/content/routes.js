const bl = require('../content/bl')

module.exports = exports = function (server) {
    //login
    server.post('/api/login', ab.login)
    server.get('/api/cover', bl.readStreaming)
}