import utils from "../common/utils";
import nodesHandler from "./nodesHandler";

function $currentPage(){
  let pages = getCurrentPages();
  return pages[pages.length-1];
}

const pageHandler = {
  onLoadHandle: function(query){
    console.log("页面onLoad时的回调！！！\n");
    Object.keys(query).forEach((item) => {
      if(query[item]){
        console.log(query[item]);
      }
    })
  },
  onReadyHandle: function (currentObj){
    nodesHandler.$fields(currentObj,nodesHandler.fieldsOption,"view",(res) =>{
      console.log(res);
    })
  },
  onShowHandle: function (){
    console.log("页面onShow时的回调!!!!\n");
    console.log(utils.$currentPage());
  },
  onHideHandle: function (){
    //console.log("页面onHide时的回调！！！");
  },
  onUnloadHandle: function(){
    console.log("页面onUnload时的回调!!!!\n");
    let currentPage = utils.$currentPage();
    console.log(currentPage)
  },
  onPullDownRefreshHandle: function(){
    console.log("下拉刷新时的回调！！！");
  },
  onReachBottomHandle: function (){
    console.log("上啦刷新时的回调！！！");
  },
  onPageScrollHandle: function (scroll){
    console.log("$onPageScrollHandle！！！: "+scroll.scrollTop.toString());
  },
  onAddToFavoritesHandle: function (v){
    console.log("onAddToFavoritesHandle！！！: "+v.webViewUrl);
  },
  onShareAppMessageHandle: function (v){
    console.log("$onShareAppMessageHandle！！！: "+v.from+" : "+v.webViewUrl);
  },
  onShareTimelineHandle: function (){
    utils.$call(this.old,this.old['onShareTimeline']);
    console.log("$onShareTimelineHandle！！！");
  },
  onResizeHandle: function (){
    console.log("$onResizeHandle！！！");
  },
  onTabItemTapHandle: function (t){
    console.log("$onTabItemTapHandle！！: "+t.pagePath+" : "+t.text);
  }
}

export default pageHandler;
