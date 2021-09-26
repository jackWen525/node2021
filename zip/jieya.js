//解压
var fs = require('fs');
var zlib = require('zlib');

const jieya = zlib.createGunzip();

const inFlie = fs.createReadStream("./a.txt.gz");
const oulie = fs.createWriteStream("b.txt");

inFlie.pipe(jieya).pipe(oulie)