class strUtil{
    constructor() {
    }

    $sub(str,index=-1,count=1,tag="/"){
        let array = str.split(tag);
        let length = array.length;
        if(index > length-1 || (index === length-1 && count >1)){
            return str;
        }
        if(index < 0){
            index = length - Math.abs(index);
        }
        array.splice(index,count);
        return array.join(tag).toString();
    }

    $getBySplitIndex(str,index=0,tag="/"){
        let array = str.split(tag);
        let length = array.length;
        if(index > length -1){
            return str;
        }
        if(index < 0){
            index = length - Math.abs(index);
        }
        return array[index].toString();
    }

    $count(str,subStr){
        if(str && !(str.indexOf(subStr) === -1)){
            return str.split(subStr).length -1;
        }else{
            return 0;
        }
    }
}

module.exports = new strUtil();