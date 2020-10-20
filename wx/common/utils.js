class utils{
  constructor(){};

  $currentPage(){
    let pages = getCurrentPages();
    return pages[pages.length-1];
  }

  $call(obj,fun,...args){
    if(fun){
      fun.call(obj,args);
    }
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
}

export default new utils();
