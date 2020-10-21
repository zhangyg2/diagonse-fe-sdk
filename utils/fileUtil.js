const fs = require("fs");
const path = require("path");

class fileUtil{
    constructor() {
    }

    abs(filePath){
        if(!(filePath.indexOf("/") === -1)){
            return this.abs(filePath.replace("/",path.sep));
        }else{
            return filePath;
        }
    }

    read(filePath,errCallBack){
        let data;
        try{
            data = fs.readFileSync(this.abs(filePath)).toString();
        }catch (e) {
            if(errCallBack){
                errCallBack(e);
            }
        }
        return data;
    }

    readList(filePath,errCallBack){
        let data = this.read(filePath,errCallBack);
        if(data){
            return data.trim().split("\n");
        }
        return [];
    }
}

module.exports = new fileUtil();