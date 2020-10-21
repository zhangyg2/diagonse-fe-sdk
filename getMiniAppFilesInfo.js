const path = require("path");
const util = require("./utils/util")
const fileUtil = require("./utils/fileUtil")
const fs = require("fs")
const cheerio = require("cheerio");

const miniAppFilesInfo = {
    project_path: "/Users/didi/IdeaProjects/passenger-client/dist/wx",
    page_file_types: ["wxml","wxss","js","json"],
    _getAppJsonPromise: function () {
        return fileUtil.read(path.join(this.project_path,"app.json"));
    },
    getPageFilesByType: function (fileType,callback){
        this._getAppJsonPromise().then((res) => {
            let appJson = JSON.parse(res);
            let resObj = {}
            appJson["pages"].forEach((item) => {
                let obj = {};
                let currentPath = path.join(this.project_path,util.subStringByTagAndIndex(item));
                let files = fs.readdirSync(currentPath).map(file => path.join(currentPath,file));
                resObj[item] = util.getStrFromArrayByTag(files,fileType);
            })
            callback(resObj);
        })
    }
}

miniAppFilesInfo.getPageFilesByType("wxml",(resObj) => {
    fileUtil.read(resObj["pages/index/index"]).then((res) =>{
        let ce = cheerio.load(res);
        console.log(ce("view").attr("style"));
    })
});