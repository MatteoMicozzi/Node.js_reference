// URL module

const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);            // >> http://mywebsite.com/hello.html?id=100&status=active (both gives this line)
console.log(myUrl.toString());

// Host (root domain)               //  
console.log(myUrl.host);            //  Host and Hostname deffear from that Host maintain the port number for example...
                                    //  http://mywebsite.com:8000/hello.html?id=100&status=active ((:8000)) is the portnumber.
// Hostname (does not get port)     //  so Host gives you >> mywebsite.com:8000
console.log(myUrl.hostname);        //  Hostname          >> mywebsite.com
                                    //  If the port number is not present the result is the same like hostname.

// Pathname
console.log(myUrl.pathname);        // >> /hello.html

// Serialized query
console.log(myUrl.search);          // >> ?id=100&status=active

// Params Object
console.log(myUrl.searchParams);    // >> URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);            // >> URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));  // output id: 100
                                                                                //        status: active
                                                                                //        abc: 123
