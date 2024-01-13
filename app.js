const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    console.log('Tabrez');
});
server.listen(4000);