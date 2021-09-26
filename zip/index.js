const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();

let inFile = fs.createReadStream("./a.txt");
let out = fs.createWriteStream("./a.txt.gz");

inFile.pipe(gzip).pipe(out);