(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{2813:function(t,e,n){"use strict";n.r(e);var i=n("ad89"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2e6a":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniBar:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-bar/uni-bar")]).then(n.bind(null,"2814"))},customAd:function(){return n.e("components/custom-ad/custom-ad").then(n.bind(null,"d96e"))},shuvodlist:function(){return Promise.all([n.e("common/vendor"),n.e("components/shuvodlist/shuvodlist")]).then(n.bind(null,"6cf4"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"59c5":function(t,e,n){},8828:function(t,e,n){"use strict";var i=n("59c5"),o=n.n(i);o.a},ad89:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,i,o,a,s){try{var r=t[a](s),c=r.value}catch(u){return void n(u)}r.done?e(c):Promise.resolve(c).then(i,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var s=t.apply(e,n);function r(t){a(s,i,o,r,c,"next",t)}function c(t){a(s,i,o,r,c,"throw",t)}r(void 0)}))}}var r=getApp().globalData,c={data:function(){return{theme:r.$theme,barMax:!0,leftIcon:"",rightIcon:"",fixed:!0,windowHeight:getApp().globalData.windowHeight,hotkeywordlist:[],nokeyword:!0,vodlistdata:[],history:[],keyword:"",selection:[],noselection:!1,wxAdId:[],timeStamp:0,systemInfo:getApp().globalData.systemInfo,statusBarHeight:20}},onLoad:function(t){var e=this,n=this;n.hotkeyword(),t.key&&this.hotkeywordtab(t.key),n.wxAdId=getApp().globalData.$config.other.wxAdId,wx.createInterstitialAd&&n.wxAdId.cpId&&(this.interstitialAd=wx.createInterstitialAd({adUnitId:n.wxAdId.cpId}),this.interstitialAd.onLoad((function(){})),this.interstitialAd.onError((function(t){})),this.interstitialAd.onClose((function(){e.interstitialAd.destroy(),e.interstitialAd=null})))},onShow:function(){this.theme=r.$theme},mounted:function(){this.systemInfo=getApp().globalData.systemInfo},computed:{barStyle:function(){var t="height:".concat(this.systemInfo.customTop,"px;");return t},searchView:function(){var t="width:".concat(this.systemInfo.customlLeft-this.systemInfo.customWidth/2,"px;height:").concat(this.systemInfo.customHeight,"px;line-height:").concat(this.systemInfo.customHeight,"px;");return t}},methods:{hotkeyword:function(){var t=this,e=this.md5("App.Mov.HotKeywords"),n=this.cjurl+"wxApi/public/?service=App.Mov.HotKeywords&sign="+e,i=this.api.apiRequest(n);i.then((function(e){t.hotkeywordlist=e.Data.data}))},search:function(e){var n=this,i=this;if(t.showLoading({mask:!0,title:"加载中..."}),""!=e){this.saveKeyword("lishiss",e);var o=this.md5(e+"App.Mov.SearchVod"),a=this.cjurl+"wxApi/public/?service=App.Mov.SearchVod&key="+e+"&sign="+o,s=this.api.apiRequest(a);s.then((function(e){t.hideLoading(),200==e.Code&&(e.Data.length>0?(n.nokeyword=!1,n.vodlistdata=[],n.vodlistdata=e.Data,n.noselection=!1,n.selection=[],i.interstitialAd&&i.wxAdId.cpId&&i.interstitialAd.show().catch((function(t){console.error(t)}))):t.showToast({title:"抱歉没有找到您要的影片...",icon:"loading",duration:5e3}))}),(function(e){t.hideLoading()}))}else t.showToast({title:"请输入片名!",icon:"loading",duration:2e3})},hotkeywordtab:function(t){t=t.replace(/[\·|\s*]/g,""),this.search(t),this.keyword=t},saveKeyword:function(e,n){var i=this;t.getStorage({key:e,success:function(o){var a=JSON.parse(o.data),s=a.indexOf(n);-1==s||a.splice(s,1),a.unshift(n),a.length>10&&a.pop(),t.setStorage({key:e,data:JSON.stringify(a),success:function(t){}}),i.history=a},fail:function(o){var a=[n];t.setStorage({key:e,data:JSON.stringify(a)}),i.history=a}})},BackPage:function(){t.navigateBack({delta:1})},searchIcon:function(){this.keyword=""},input:function(t){var e=this;e.keyword=t.detail.value,""==e.keyword?e.nokeyword=!0:(console.log(t.timeStamp-this.timeStamp),t.timeStamp-this.timeStamp>500&&(this.timeStamp=t.timeStamp,e.searchData()))},searchData:function(){var t=this;if(t.vodlistdata.length<1&&t.keyword.length>0){var e=t.cjurl+"/api.php/provide/search/?wd="+t.keyword,n=t.api.apiRequest(e);n.then((function(e){e.list.length>0?(t.noselection=!0,t.selection=e.list,t.nokeyword=!1):(t.noselection=!1,t.selection=[],t.nokeyword=!0)}))}},confirm:function(){this.search(this.keyword)},selectionTab:function(t){this.keyword=t,this.search(this.keyword)}},watch:{keyword:{handler:function(){var t=s(i.default.mark((function t(e,n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e||(this.vodlistdata=[],this.noselection=!1,this.selection=[],this.nokeyword=!0);case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},selection:{handler:function(){var t=s(i.default.mark((function t(e,n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}}};e.default=c}).call(this,n("543d")["default"])},e963:function(t,e,n){"use strict";n.r(e);var i=n("2e6a"),o=n("2813");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("8828");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},fecf:function(t,e,n){"use strict";(function(t){n("880b");i(n("66fd"));var e=i(n("e963"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fecf","common/runtime","common/vendor"]]]);