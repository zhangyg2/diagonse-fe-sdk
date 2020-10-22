class listUtil{
    constructor() {
    }

    $getByIndexOfTag(array,tag){
        let res;
        for(let a in array){
            if(!(array[a].indexOf(tag) === -1)){
                res = array[a];
                break;
            }
        }
        return res;
    }

    $isEmpty(array){
        return array && array.length >0;
    }
}

module.exports= new listUtil();