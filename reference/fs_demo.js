// File system module

const fs = require('fs');               // fs short for file system.
const path = require('path');

//
// If you run the file how it is with (node fs_demo) it will throw errors.
// In order to make it run, comment out all of them, apart of the one need it. 
//

// Create folder -- asynchronous
fs.mkdir(path.join(__dirname, '/test'), {}, err => {    // It was -function(err) {- used arrow function for abbreviation no parentesis for err because only one argument.
    if(err) throw err;                                  // At the second parameter of mkdir ask for options which is none for this so we pass an empty object {}. 
    console.log('Folder created...');
});

// Create and write to file -- asynchronous
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), // Third parameter of join creates filename with extencion.
    'Hello World!',                                      // Second parameter of writeFile is the text that we want in the file hello.txt.
    err => { 
        if(err) throw err;
        console.log('File written to...');                   // If we don't comment out the previous code, we will see an error because in this one, we try to create again
                                                            // the same folder test and the file will be created but without content in it.
// File append 
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
            ' I Love Node.js',                                      // If we leave writeFile and add this code underneath it will overwrites the content file with just ' I Love Node.js',
            err => {                                                // which will exclude the previous code. So instead we can use appendFile.
                if(err) throw err;                                  // It's important to put that in the same callback of writFile so it runs at the same time.
                console.log('File written to...');
            }
        );
    }
);

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {    // At the second parameter you want the character encoding (in order to reed) which is utf8.
    if(err) throw err;                                                              // If you don't put utf8 it will give you a raw buffer not the actual data.
    console.log(data);                                                              // Because we did add the encoding we can get the data as well from the file so we will pass
});                                                                                 // data as the second parameter of the function.

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), err => {
    if(err) throw err;
    console.log('File renamed...');                           // The path goes at the second parameter of rename with the renamed file.
});