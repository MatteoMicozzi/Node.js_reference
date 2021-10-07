// Operating system module

const os = require('os');           // Gives info about our environment and 'os' operating system.

// Platform
console.log(os.platform());

// CPU Arch (Architecture)
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime // Output number of seconds that your system has been up.
console.log(os.uptime());