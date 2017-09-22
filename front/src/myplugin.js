const MyPlugin = {};

import loading from "./scrolltop";
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log("我是vue下面的方法，通过Vue.myplugin")
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  
  })
  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
       
      this.loadingshow = function (){
        // console.log("show");
         vm.$children[0].show();
      }

      this.loadinghide = function(){
        vm.$children[0].hide();
      }
    }

  })
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }

  // 5. 全局组件

  //初始化我自己的loading的组件， 并插入到dom 节点中，开发者直接同this.show this.hide 进行调用
  
  var vm = new Vue({
    el:document.createElement("div"),
    render:h=>h(loading)
  });

  // console.log(vm.$el);
  console.log(vm.$children[0])
  document.body.appendChild(vm.$el);
}

export default MyPlugin;