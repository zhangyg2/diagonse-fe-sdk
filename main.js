const fs = require("fs")
const fu = require("./utils/fileUtil")
const appInfos = require("./getMiniAppFilesInfo");
const ut = require("./utils/util");

appInfos.setProjectPath("D:\\workspace\\diagonse-fe-sdk\\wx");
appInfos.getPageFilesByType("wxml",(resObj) => {
    let keys = Object.keys(resObj);
    let wxmlArray = fu.readList(resObj[keys[0]]).filter(d => d.indexOf("<!") === -1);
    wxmlArray.forEach((node) => {
        let ss = node.split("<");
        let tabIndex = ut.$count(ss[0]," ");
        console.log(node);
    })
})

//console.log(ut.$count("wwwwwwwww","w"));