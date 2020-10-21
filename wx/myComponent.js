import utils from './common/wxUtils';

const $init = function() {
  let oldComponent = Component;
  Component = function (obj) {
    let old = utils.$deepCopy(obj);
    obj.ready = function (){
      old.ready.call(this);
      console.log(this.is+" : "+JSON.stringify(this.data));
    }
    return oldComponent(obj);
  }
}
exports.$init = $init;
