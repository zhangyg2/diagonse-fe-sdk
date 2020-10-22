import utils from "../../tools"

function selectorQueryDelay(currentObj,callback,clearTimeout=200){
  setTimeout(() => {
    try{
      let query = wx.createSelectorQuery().in(utils.$currentPage());
      if(query){
        callback(query);
      }
    }
    catch (e) {
    }
  },clearTimeout)
}

const nodesHandler = {
  fieldsOption:{
    id: true,
    dataset: true,
    mark: true,
    rect: true,
    size: true,
    scrollOffset: true,
    properties: true,
    computedStyle: true,
    context: true,
    node: true
  },
  $node: function (currentObj,selector,refCallBack) {
    selectorQueryDelay(currentObj,(query) => {
      query.selectAll(selector).node((res) => {
        if(res){
          refCallBack(res);
        }else {
          console.log("没有获取到节点"+selector+"对应的实例")
        }
      }).exec();
    })
  },

  $context: function (currentObj,selector,refCallBack) {
    selectorQueryDelay(currentObj,(query) => {
      query.selectAll(selector).context((res) => {
        if(res){
          refCallBack(res);
        }else {
          console.log("没有获取到节点"+selector+"对应的实例")
        }
      }).exec();
    })
  },

  $scrollOffset: function (currentObj,selector,refCallBack) {
    selectorQueryDelay(currentObj,(query) => {
      query.selectAll(selector).selectViewport().scrollOffset((res) => {
        if(res){
          refCallBack(res);
        }else {
          console.log("没有获取到节点"+selector+"对应的实例")
        }
      }).exec();
    })
  },

  $fields: function (currentObj,fieldsOption,selector,refCallBack) {
    selectorQueryDelay(currentObj,(query) => {
      query.select(selector).fields(fieldsOption,(res) => {
        if(res){
          refCallBack(res)
        }else {
          console.log("没有获取到节点"+selector+"对应的实例");
        }
      }).exec();
    })
  },

  $boundingClientRect: function (currentObj,selector,refCallBack) {
    selectorQueryDelay(currentObj,(query) => {
      query.select(selector).boundingClientRect((res) => {
        if(res){
          refCallBack(res);
        }else{
          console.log("没有获取到节点"+selector+"对应的实例");
        }
      }).exec();
    })
  }
}

export default nodesHandler;
