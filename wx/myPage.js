import pageHandler from "./handlers/pageHandler";
import utils from "./common/utils";

const $init = function() {
  let oldPage = Page;
  Page = function (obj) {
    let olds = {
      onLoad:{},
      onShow:{},
      onReady:{},
      onHide:{},
      onUnload:{},
      onPullDownRefresh:{},
      onReachBottom:{},
      onShareAppMessage:{},
      onPageScroll:{},
      onResize:{},
      onTabItemTap:{},
      _cmlEventProxy:{}
    }
    Object.keys(olds).forEach((item) => {
      olds[item] = obj[item];
    })
    obj._cmlEventProxy = function (res) {
      olds._cmlEventProxy.call(this,res)
    }
    obj.onShow = function () {
      olds.onShow.call(this);
      console.log(this.is+" : "+JSON.stringify(this.data));
    }
    return oldPage(obj);
  }
}
exports.$init = $init;