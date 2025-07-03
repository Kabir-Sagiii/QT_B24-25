const os = require("os");

var OSName = os.platform();
console.log(OSName); //win32 linux darwin

var memoryValue = os.totalmem();
console.log(memoryValue);

var freeMemoryValue = os.freemem();
console.log(freeMemoryValue);

var version = os.version();
console.log(version);

var release = os.release();
console.log(release);

var arch = os.arch();
console.log(arch);
