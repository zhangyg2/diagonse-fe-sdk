const fs = require("fs");

class fileUtil{
    constructor() {
    }

    async read(filePath){
        return await new Promise((resolve, reject) => {
            fs.readFile(filePath,(err, data) => {
                if(err){
                    reject(err);
                }else{
                    resolve(data.toString());
                }
            })
        })
    }
}

module.exports = new fileUtil();