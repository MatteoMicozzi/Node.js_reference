const http = require('http');

// Create server object
http.createServer((req, res) => {           // req => request, res => response
    // Write a response
    res.write('Hello World!');              // When he get a request the response is this one and then the line below.
    res.end();
}).listen(5000, () => console.log('Server running...'));        // In orde to run he need to listen to a port number thats why this line.
                                                                // To run it, node and the filename where the server is. To see it, just
                                                                // open the browser and localhost:5000 (number of the port preimposted).
