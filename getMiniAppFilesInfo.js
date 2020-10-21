const path = require("path");
const util = require("./utils/util")
const fileUtil = require("./utils/fileUtil")
const fs = require("fs")
const cheerio = require("cheerio");

let project_path = "/Users/didi/IdeaProjects/passenger-client/dist/wx";

function _getAppJson() {
    return fileUtil.read(path.join(project_path,"app.json"));
}

const miniAppInfos = {
    page_file_types: ["wxml","wxss","js","json"],
    setProjectPath: function (p){
        project_path = p;
    },
    getPageFilesByType: function (fileType,callback){
        let appJson = JSON.parse(_getAppJson());
        let resObj = {}
        appJson["pages"].forEach((item) => {
            let currentPath = path.join(project_path,fileUtil.abs(util.subStringByTagAndIndex(item)));
            let files = fs.readdirSync(currentPath).map(file => path.join(currentPath,file));
            resObj[item] = util.getStrFromArrayByTag(files,fileType);
        })
        callback(resObj);
    }
}

module.exports = miniAppInfos;