const url = require("url");
const bsaeUrl = "https://gitee.com/newt/zkteco_cloud_h5/compare/f61b6285c236f861ce7663b1f707a972bd9b13b3...fb26848f062f3b7fdc64ddd4b913bc5cc60ad9d2"
const desUrl = "./src/index"
const des = url.parse(bsaeUrl);
const he = url.resolve(bsaeUrl,desUrl);
console.log(des);
console.log(he);