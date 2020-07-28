const http = require('http')

const PORT = 8000
const serverHandele = require('../app')

const server = http.createServer(serverHandele)

server.listen(PORT)