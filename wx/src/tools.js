class tools{
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
}

export default new tools();
