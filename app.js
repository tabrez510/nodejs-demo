const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    const url = req.url;
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>Node js</title></head>')
        res.write('<body><h1>Welcome to my Node js Project</h1></body>')
        res.write('</html>')
        res.end();
    }
    else if(url==='/home'){
        res.write('<html>')
        res.write('<head><title>home</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        res.end();
    }
    else if(url==='/about'){
        res.write('<html>')
        res.write('<head><title>about</title></head>')
        res.write('<body><h1>Welcome to About Us Page</h1></body>')
        res.write('</html>')
        res.end();
    }
    else if(url==='/node'){
        res.write('<html>')
        res.write('<head><title>Node js</title></head>')
        res.write('<body><h1>Welcome to my Node js Project</h1></body>')
        res.write('</html>')
        res.end();
    }
});
server.listen(4000);