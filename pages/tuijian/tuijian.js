(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/tuijian/tuijian"], {
    "0122": function (t, n, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = getApp().globalData,
        o = {
          data: function () {
            return {
              theme: e.$theme,
              vodlist: [],
              wxAdId: [],
              levelID: 0,
              levelName: "电影推荐",
              page: 1,
              loadingText: "加载中...",
              noLoading: !1
            }
          },
          onLoad: function (t) {
            this.levelID = t.id, this.levelName = t.name
          },
          onHide: function () {},
          onReady: function () {
            var t = this;
            e.$login ? t.refresh(t.levelID) : setTimeout((function () {
              t.refresh(t.levelID)
            }), 300)
          },
          onShareAppMessage: function (t) {
            return {
              title: "一周" + this.levelName,
              path: "pages/tuijian/tuijian?id=" + this.levelID,
              imageUrl: this.vodlist[0].vod_pic
            }
          },
          onShareTimeline: function (t) {
            return {
              title: "一周" + this.levelName,
              path: "pages/tuijian/tuijian?id=" + this.levelID,
              imageUrl: this.vodlist[0].vod_pic
            }
          },
          onReachBottom: function () {
            var t = this;
            this.noLoading || (t.loadingText = "加载中...", t.noLoading = !0, setTimeout((function () {
              t.page++, t.refresh(t.levelID)
            }), 1500))
          },
          methods: {
            refresh: function (t) {
              var n = this;
              this.loadingText = "加载中...", this.noLoading = !0;
              var i = this.md5(t + this.page + "App.Mov.GetLevelId"),
                e = this.cjurl + "wxApi/public/?service=App.Mov.GetLevelId&level=" + t + "&page=" + this.page + "&sign=" + i;
              this.api.apiRequest(e).then((function (t) {
                n.loadingText = "加载完成", 200 == t.Code && void 0 != t.Data.length ? (n.noLoading = !1, n.vodlist.length < 1 ? (n.vodlist = t.Data, n.init()) : n.vodlist = n.vodlist.concat(t.Data)) : n.loadingText = "我是有底线的"
              }))
            },
            init: function () {
              var t = this,
                n = this;
              this.wxAdId = e.$config.topic.wxAdId, wx.createInterstitialAd && this.wxAdId.cpId && (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: this.wxAdId.cpId
              }), this.interstitialAd.onLoad((function () {})), this.interstitialAd.onError((function (t) {})), this.interstitialAd.onClose((function () {
                t.interstitialAd.destroy(), t.interstitialAd = null
              }))), this.interstitialAd && setTimeout((function () {
                n.interstitialAd.show().catch((function (t) {
                  console.error(t)
                }))
              }), 1500)
            }
          }
        };
      n.default = o
    },
    "4bb1": function (t, n, i) {
      "use strict";
      i.r(n);
      var e = i("0122"),
        o = i.n(e);
      for (var a in e) "default" !== a && function (t) {
        i.d(n, t, (function () {
          return e[t]
        }))
      }(a);
      n["default"] = o.a
    },
    "6b92": function (t, n, i) {},
    bd45: function (t, n, i) {
      "use strict";
      i.r(n);
      var e = i("c7b3"),
        o = i("4bb1");
      for (var a in o) "default" !== a && function (t) {
        i.d(n, t, (function () {
          return o[t]
        }))
      }(a);
      i("d932");
      var l, s = i("f0c5"),
        r = Object(s["a"])(o["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], l);
      n["default"] = r.exports
    },
    c7b3: function (t, n, i) {
      "use strict";
      i.d(n, "b", (function () {
        return o
      })), i.d(n, "c", (function () {
        return a
      })), i.d(n, "a", (function () {
        return e
      }));
      var e = {
          narBar: function () {
            return i.e("components/narBar/narBar").then(i.bind(null, "4f20"))
          },
          customAd: function () {
            return i.e("components/custom-ad/custom-ad").then(i.bind(null, "d96e"))
          },
          shuvodlist: function () {
            return Promise.all([i.e("common/vendor"), i.e("components/shuvodlist/shuvodlist")]).then(i.bind(null, "6cf4"))
          }
        },
        o = function () {
          var t = this,
            n = t.$createElement;
          t._self._c
        },
        a = []
    },
    d932: function (t, n, i) {
      "use strict";
      var e = i("6b92"),
        o = i.n(e);
      o.a
    },
    fabd: function (t, n, i) {
      "use strict";
      (function (t) {
        i("880b");
        e(i("66fd"));
        var n = e(i("bd45"));

        function e(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(n.default)
      }).call(this, i("543d")["createPage"])
    }
  },
  [
    ["fabd", "common/runtime", "common/vendor"]
  ]
]);