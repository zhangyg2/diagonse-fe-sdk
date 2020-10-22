class objUtil{
    constructor() {
    }

    $deepCopy(obj){
        let obj2 = {};
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                if(Array.isArray(obj[i])){
                    obj2[i]=[];
                    this.$deepCopy(obj[i],obj2[i]);
                }else if(typeof obj[i]==="function"){
                    obj2[i]=obj[i];
                }else if(obj[i] instanceof Object){
                    obj2[i]={};
                    this.$deepCopy(obj[i],obj2[i]);
                }else{
                    obj2[i]=obj[i];
                }
            }
        }
        return obj2;
    }

    $isEmpty(obj){
        return obj && Object.keys(obj).length >0;
    }

    $length(obj){
        return Object.keys(obj).length;
    }
}

module.exports = new objUtil();