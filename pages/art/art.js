(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/art/art"],{2265:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=getApp().globalData,e={data:function(){return{theme:n.$theme,artData:[],wxAdId:[],artid:0}},onLoad:function(t){this.artid=t.id},onHide:function(){},onReady:function(){var t=this;n.$login?t.refresh(t.artid):setTimeout((function(){t.refresh(t.artid)}),300)},onShareAppMessage:function(t){return{title:this.artData.topic_name,path:"pages/art/art?id="+this.artData.topic_id,success:function(t){},fail:function(t){}}},onShareTimeline:function(t){return{title:this.artData.topic_name,path:"pages/art/art?id="+this.artData.topic_id,imageUrl:this.artData.topic_pic}},methods:{refresh:function(i){var n=this;t.showLoading({mask:!0,title:"加载中..."});var e=this.md5(this.mark+"App.Topic.GetTopicId"+i),a=this.cjurl+"wxApi/public/?service=App.Topic.GetTopicId&topid="+i+"&mark="+this.mark+"&sign="+e;this.api.apiRequest(a).then((function(i){t.hideLoading(),200==i.Code&&(n.artData=i.Data,t.setNavigationBarTitle({title:n.artData.name}),n.init())}))},init:function(){var t=this,i=this;this.wxAdId=n.$config.topic.wxAdId,wx.createInterstitialAd&&this.wxAdId.cpId&&(this.interstitialAd=wx.createInterstitialAd({adUnitId:this.wxAdId.cpId}),this.interstitialAd.onLoad((function(){})),this.interstitialAd.onError((function(t){})),this.interstitialAd.onClose((function(){t.interstitialAd.destroy(),t.interstitialAd=null}))),this.interstitialAd&&setTimeout((function(){i.interstitialAd.show().catch((function(t){console.error(t)}))}),1500)}}};i.default=e}).call(this,n("543d")["default"])},"24b0":function(t,i,n){"use strict";var e=n("e165"),a=n.n(e);a.a},"310f":function(t,i,n){"use strict";n.r(i);var e=n("2265"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},"3db8":function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}));var e={narBar:function(){return n.e("components/narBar/narBar").then(n.bind(null,"4f20"))},customAd:function(){return n.e("components/custom-ad/custom-ad").then(n.bind(null,"d96e"))},shuvodlist:function(){return Promise.all([n.e("common/vendor"),n.e("components/shuvodlist/shuvodlist")]).then(n.bind(null,"6cf4"))}},a=function(){var t=this,i=t.$createElement;t._self._c},r=[]},"474c":function(t,i,n){"use strict";n.r(i);var e=n("3db8"),a=n("310f");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("24b0");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);i["default"]=s.exports},"7e8c":function(t,i,n){"use strict";(function(t){n("880b");e(n("66fd"));var i=e(n("474c"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},e165:function(t,i,n){}},[["7e8c","common/runtime","common/vendor"]]]);