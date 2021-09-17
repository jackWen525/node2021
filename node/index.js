const fs = require("fs");
// fs.readFile("a.txt", { flag: "r", encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
// });
/**
 * 
 * @param {*} file 文件名
 * @param {*} flag 标识
 * @param {*} encoding 格式
 * @returns 
 */
function pmisReadFile(file,flag="r",encoding="utf-8") {
    return new Promise((reslove, reject) => {
        fs.readFile(file, { flag ,encoding }, (err, data) => {
            if(err) {
                reject(err)
            }else {
                reslove(data)
            }

        })
    })
}
// pmisReadFile("a.txt").then(data=>{
//     console.log(data);
// },err=>{
//     console.log(err);
// })
module.exports = {pmisReadFile}