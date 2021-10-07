// Path module

const path = require('path');

// Base file name
console.log(path.basename(__filename));
    // cl OUTPUT
    // path_demo.js

// Directory name
console.log(path.dirname(__filename)); // Or console.log(__dirname); give the same result but in this case you don't use the path module.
    // cl OUTPUT
    // /Users/matteomicozzi/NODE_CRASH/reference

// File extension
console.log(path.extname(__filename));
    // cl OUTPUT
    // .js

// Create path object
console.log(path.parse(__filename)); // For example with .base like console.log(path.parse(__filename).base); cl OUTPUT => path_demo.js
    // cl OUTPUT
    // {
    //     root: '/',
    //     dir: '/Users/matteomicozzi/NODE_CRASH/reference',
    //     base: 'path_demo.js',
    //     ext: '.js',
    //     name: 'path_demo'
    //   }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); 
    // cl OUTPUT => /Users/matteomicozzi/NODE_CRASH/reference/test/hello.html
// This resolves the issue with delimiters between folders and/or files in a path for Mac '/' & for Win '\'.
