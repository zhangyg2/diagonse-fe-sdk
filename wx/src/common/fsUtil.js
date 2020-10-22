const fs = require("fs");
const path = require("path");
const os = require("os");

class fsUtil{
    constructor() {
    }

    $join(...paths){

    }

    $seq(filePath){
        if(!(os.platform().indexOf("win32"))){
            if(!(filePath.indexOf("/") === -1)){
                return this.abs(filePath.replace("/",path.sep));
            }else{
                return filePath;
            }
        }else{
            return filePath;
        }
    }

    $read(filePath,errCallBack){
        let data;
        try{
            data = fs.readFileSync(this.$seq(filePath)).toString();
        }catch (e) {
            if(errCallBack){
                errCallBack(e);
            }
        }
        return data;
    }

    $readList(filePath,errCallBack){
        let data = this.read(filePath,errCallBack);
        if(data){
            return data.trim().split("\n");
        }
        return [];
    }

    $getDirFiles(dirPath,errCallBack){
        try {
            return fs.readdirSync(this.$seq(dirPath));
        }catch (e) {
            if(errCallBack){
                errCallBack(e)
            }
        }
        return [];
    }
}

module.exports = new fsUtil();