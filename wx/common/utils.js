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

  $deepCopy(obj1,obj2={}){
    for(let i in obj1){
      if(obj1.hasOwnProperty(i)){
        if(Array.isArray(obj1[i])){
          obj2[i]=[];
          this.$deepCopy(obj1[i],obj2[i]);
        }else if(typeof obj1[i]==="function"){
          obj2[i]=obj1[i];
        }else if(obj1[i] instanceof Object){
          obj2[i]={};
          this.$deepCopy(obj1[i],obj2[i]);
        }else{
          obj2[i]=obj1[i];
        }
      }
    }
    return obj2;
  }
}

export default new utils();
