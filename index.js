const http = require('http');
const path = require('path');
const fs = require('fs');

// problem with CSS

////////////////////////////////////////////////////////////////////////////////////////
// This pages are inside the local server below

// function indexPage() {
//     // Index page
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;                                             // Better to check for an error.
//             res.writeHead(200, { 'Content-Type': 'text/html' });            // It needs to have 200 it's all right and content type,
//             res.end(content);                                               // it works as well without it but, it's better to have it. 
//             }
//         )
//     } 
// };
// function aboutPage() {
//     // Second page about
//     if (req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(content);
//             }
//         )
//     }
// };
// function jsonDatabase() {
//     // Hard coded database -- Learn more about JSON
//     if (req.url === '/api/users') {
//         const users = [                         // Actual understanding this is a JSON format.
//             { name: 'Will Wall', age: 80 },
//             { name: 'Justin Bell', age: 3}
//         ];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(users));
//     }
// };
////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
    // // They are commented out in order to make run the uncommented code below
    // indexPage();
    // aboutPage();
    // jsonDatabase();

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set contentType
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));