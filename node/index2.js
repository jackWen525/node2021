const fs = require('fs');
const data = new Uint8Array(new Buffer.from('Hello Node.js'));
fs.writeFile('b.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
/**
 * 
 * @param {*} file 文件名
 * @param {*} data 写入的数据
 * @param {*} flag 标识
 * @param {*} encoding 格式
 */
function PerWite(file, data, flag = "w", encoding = "utf-8") {
   return new Promise((reslove, reject) => {
        fs.writeFile(file, data, { flag, encoding }, (err) => {
            if (err) {
                reject(err);
            } else {
                reslove("ok");
            }

        });

    })
}

PerWite("b.txt","hskjhjsjk").then(res=>{
    console.log(res);
},err=>{
    console.log(err);
})