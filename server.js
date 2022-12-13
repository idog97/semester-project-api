const http = require('http');
const app = require('./app');
const port  = 5005;

const server = http.createServer(app);
server.listen(port,()=>{console.log("server online")});