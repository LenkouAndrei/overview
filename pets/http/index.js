const http = require('http');
const fs = require('fs');
const base = 'home/examples/public_html';
const mime = require('mime');
const path = require('path');

const server = http.createServer((req, res) => {
    const pathname = path.normalize(base + req.url);
    console.log(pathname);

    fs.stat(pathname, (err, stats) => {
        if (err) {
            res.writeHead(404);
            res.write('Resource missing 404\n');
            res.end();
        } else if (stats.isFile()) {
            const type = mime.lookup(pathname);
            console.log(type);
            res.setHeader('Content-Type', type);

            const file = fs.createReadStream(pathname);
            file.on('open', () => {
                res.statusCode = 200;
                file.pipe(res);
            });
            file.on('error', (err) => {
                console.log(err);
                res.writeHead(403);
                res.write('file permission');
                res.end();
            });
            res.end();
        } else {
            res.writeHead(403);
            res.write('Directory access is forbidden');
            res.end();
        }
    });
}).listen(8124);
console.log('Server is running at 8124');

// server.on('request', function(req, res) {
//     var body = '';
//     if (req.method == 'POST') {
//         req.on('data', function (data) {
//             body += data;
//         });

//         req.on('end', function () {
//             var post = querystring.parse(body);
//             console.log(post);
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Hello World\n');
//         });
//     }
// });

console.log('server listening on 8214');