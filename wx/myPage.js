import pageHandler from "./handlers/pageHandler";
import utils from "./common/utils";

const $init = function() {
  let oldPage = Page;
  Page = function (obj) {
    let olds = utils.$deepCopy(obj);
    obj.onShow = function () {
      olds.onShow.call(this);
      console.log(this.is+" : "+JSON.stringify(this.data));
    }
    return oldPage(obj);
  }
}
exports.$init = $init;