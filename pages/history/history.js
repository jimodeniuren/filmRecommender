(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/history/history"], {
    "3c5d": function (t, i, n) {
      "use strict";
      n.r(i);
      var s = n("bfeb"),
        e = n("617b");
      for (var a in e) "default" !== a && function (t) {
        n.d(i, t, (function () {
          return e[t]
        }))
      }(a);
      n("b266");
      var o, l = n("f0c5"),
        c = Object(l["a"])(e["default"], s["b"], s["c"], !1, null, "8c502362", null, !1, s["a"], o);
      i["default"] = c.exports
    },
    "50f7": function (t, i, n) {
      "use strict";
      (function (t) {
        n("880b");
        s(n("66fd"));
        var i = s(n("3c5d"));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(i.default)
      }).call(this, n("543d")["createPage"])
    },
    "617b": function (t, i, n) {
      "use strict";
      n.r(i);
      var s = n("69ce"),
        e = n.n(s);
      for (var a in s) "default" !== a && function (t) {
        n.d(i, t, (function () {
          return s[t]
        }))
      }(a);
      i["default"] = e.a
    },
    "69ce": function (t, i, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var s = getApp().globalData,
          e = function () {
            n.e("components/side-slip/index").then(function () {
              return resolve(n("82d8"))
            }.bind(null, n)).catch(n.oe)
          },
          a = {
            components: {
              "side-slip": e
            },
            data: function () {
              return {
                theme: s.$theme,
                barMax: !0,
                tab: [{
                  icon: "",
                  text: "历史"
                }, {
                  icon: "",
                  text: "收藏"
                }],
                lishi: !1,
                tabindex: 0,
                lishilist: [],
                lishilistdata: !1,
                shoucanglist: [],
                shoucanglistdata: !1,
                DeleteLog: !1,
                wxAdId: []
              }
            },
            onLoad: function (i) {
              var n = this;
              n.tabindex = Number(i.tab), n.getLogAll(), t.hideShareMenu(), n.wxAdId = getApp().globalData.$config.other.wxAdId
            },
            onReady: function () {},
            onBackPress: function (t) {},
            methods: {
              getLogAll: function () {
                var i = t.getStorageSync("lishi");
                i && (i = JSON.parse(i), this.lishilist = i, this.shoucanglist = i.filter((function (t) {
                  return 1 == t.shoucang
                })), this.lishilist.length < 1 ? this.lishilistdata = !0 : this.lishilistdata = !1, this.shoucanglist.length < 1 ? this.shoucanglistdata = !0 : this.shoucanglistdata = !1)
              },
              onRemove: function (t) {
                switch (this.tabindex) {
                  case 0:
                    this.lishilist[t].shoucang ? this.db.setLSDB(this.lishilist[t]) : this.db.DeleteDB(this.lishilist[t]), this.lishilist.splice(t, 1);
                    break;
                  case 1:
                    this.shoucanglist[t].shoucang = !1, this.db.scDB(this.shoucanglist[t]), this.shoucanglist.splice(t, 1);
                    break
                }
                this.lishilist.length < 1 ? this.lishilistdata = !0 : this.lishilistdata = !1, this.shoucanglist.length < 1 ? this.shoucanglistdata = !0 : this.shoucanglistdata = !1
              },
              vodlisttab: function (t) {},
              tabclick: function (t) {
                this.tabindex = t
              }
            }
          };
        i.default = a
      }).call(this, n("543d")["default"])
    },
    "89d5": function (t, i, n) {},
    b266: function (t, i, n) {
      "use strict";
      var s = n("89d5"),
        e = n.n(s);
      e.a
    },
    bfeb: function (t, i, n) {
      "use strict";
      n.d(i, "b", (function () {
        return e
      })), n.d(i, "c", (function () {
        return a
      })), n.d(i, "a", (function () {
        return s
      }));
      var s = {
          uniBar: function () {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-bar/uni-bar")]).then(n.bind(null, "2814"))
          },
          narBar: function () {
            return n.e("components/narBar/narBar").then(n.bind(null, "4f20"))
          },
          customAd: function () {
            return n.e("components/custom-ad/custom-ad").then(n.bind(null, "d96e"))
          },
          shuvodlist: function () {
            return Promise.all([n.e("common/vendor"), n.e("components/shuvodlist/shuvodlist")]).then(n.bind(null, "6cf4"))
          }
        },
        e = function () {
          var t = this,
            i = t.$createElement;
          t._self._c
        },
        a = []
    }
  },
  [
    ["50f7", "common/runtime", "common/vendor"]
  ]
]);