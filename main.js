const fs = require("fs")
const ou = require("./wx/src/common/objUtil");
const lu = require("./wx/src/common/listUtil")
const path = require("path");
const appInfos = require("./wx/src/files/appInfos");

appInfos.set_project_path("D:\\workspace\\diagonse-fe-sdk\\wx");
// appInfos.getPageFilesByType("wxml",(resObj) => {
//     let keys = Object.keys(resObj);
//     let wxmlArray = fileUtil.readList(resObj[keys[0]]).filter(d => d.indexOf("<!") === -1);
//     wxmlArray.forEach((node) => {
//         let ss = node.split("<");
//         let tabIndex = util.$count(ss[0]," ");
//         console.log(node);
//     })
// })

appInfos.setAppJson();
console.log(appInfos.getPageFiles("js"));