const path  = require("path");
const fu = require("../common/fsUtil");
const su = require("../common/strUtil");
const lu = require("../common/listUtil");
const ou = require("../common/objUtil");

const infos = {
    project_path: "/Users/didi/IdeaProjects/passenger-client/dist/wx",
    appJson: {}
}

class appInfos{
    constructor() {
    }

    set_project_path(p){
        infos.project_path = p
    }

    setAppJson(){
        let appJsonData = fu.$read(path.join(infos.project_path,"app.json"));
        if(appJsonData){
            infos.appJson = JSON.parse(appJsonData);
        }
    }

    getPageFiles(fileType){
        let pageFiles = {};
        if(ou.$isEmpty(infos.appJson)){
            infos.appJson["pages"].forEach((item) =>{
                let currentPath = path.join(infos.project_path,su.$sub(item));
                let files = fu.$getDirFiles(currentPath).map(file => path.join(currentPath,file));
                pageFiles[item] = lu.$getByIndexOfTag(files,fileType);
            })
            let subPackages = infos.appJson["subPackages"];
            if(lu.$isEmpty(subPackages)){
                subPackages.forEach((pk) =>{
                    let rootDirName = pk["root"];
                    let pk_root_path = path.join(infos.project_path,rootDirName);
                    pk["pages"].forEach((item) =>{
                        let currentPath = path.join(pk_root_path,su.$sub(item));
                        let files = fu.$getDirFiles(currentPath).map(file => path.join(currentPath,file));
                        pageFiles[path.join(rootDirName,item)] = lu.$getByIndexOfTag(files,fileType);
                    })
                })
            }
        }
        return pageFiles;
    }

    getComponentFiles(fileType){

    }
}

module.exports = new appInfos();