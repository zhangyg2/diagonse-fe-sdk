import nodesHandler from './handlers/nodesHandler'
import utils from './common/utils';

const $init = function() {
  let old = Component;
  Component = function (obj) {
    let olds = {
      created:{},
      attached:{},
      ready:{},
      moved:{},
      detached:{},
      _cmlEventProxy:{}
    }
    Object.keys(olds).forEach((item) => {
      if(item.indexOf("_cmlEventProxy") === -1){
        olds[item] = obj[item];
      }else{
        olds[item] = obj.methods[item];
      }
    })
    obj.methods._cmlEventProxy = function (res){
      olds._cmlEventProxy.call(this,res);
      // nodesHandler.$boundingClientRect(this,"#"+res.currentTarget.id,(rfRes) => {
      //   console.log(rfRes);
      // })
      if(res.type === "tap" || res.type === "input"){
        console.log(this.is);
      }
    }
    obj.ready = function (){
      olds.ready.call(this);
      console.log(this.is+" : "+JSON.stringify(this.data));
    }
    return old(obj);
  }
}
exports.$init = $init;
