(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/wode/wode"], {
    "2c06": function (e, n, t) {},
    "3e7b": function (e, n, t) {
      "use strict";
      var i = t("2c06"),
        o = t.n(i);
      o.a
    },
    "64bd": function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t("ca1b"),
        o = t("b956");
      for (var r in o) "default" !== r && function (e) {
        t.d(n, e, (function () {
          return o[e]
        }))
      }(r);
      t("3e7b");
      var u, a = t("f0c5"),
        s = Object(a["a"])(o["default"], i["b"], i["c"], !1, null, "e661a0a8", null, !1, i["a"], u);
      n["default"] = s.exports
    },
    "8bc4": function (e, n, t) {
      "use strict";
      (function (e) {
        t("880b");
        i(t("66fd"));
        var n = i(t("64bd"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(n.default)
      }).call(this, t("543d")["createPage"])
    },
    b956: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t("ff36"),
        o = t.n(i);
      for (var r in i) "default" !== r && function (e) {
        t.d(n, e, (function () {
          return i[e]
        }))
      }(r);
      n["default"] = o.a
    },
    ca1b: function (e, n, t) {
      "use strict";
      t.d(n, "b", (function () {
        return o
      })), t.d(n, "c", (function () {
        return r
      })), t.d(n, "a", (function () {
        return i
      }));
      var i = {
          uniBar: function () {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-bar/uni-bar")]).then(t.bind(null, "2814"))
          },
          narBar: function () {
            return t.e("components/narBar/narBar").then(t.bind(null, "4f20"))
          },
          uniAd: function () {
            return t.e("components/uni-ad/uni-ad").then(t.bind(null, "2c61"))
          },
          customAd: function () {
            return t.e("components/custom-ad/custom-ad").then(t.bind(null, "d96e"))
          },
          uniPopup: function () {
            return t.e("components/uni-popup/uni-popup").then(t.bind(null, "3982"))
          },
          popup: function () {
            return t.e("components/popup/popup").then(t.bind(null, "188b"))
          }
        },
        o = function () {
          var e = this,
            n = e.$createElement;
          e._self._c
        },
        r = []
    },
    ff36: function (e, n, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = getApp().globalData,
          i = {
            data: function () {
              return {
                theme: t.$theme,
                maskClick: !1,
                userImg: "../../static/tab/tabbarmeh.png",
                userInfo: [],
                mylist: [{
                  text: "历史",
                  icon: "",
                  color: "#55aaff"
                }, {
                  text: "收藏",
                  icon: "",
                  color: "#FFCC40"
                // }, {
                //   text: "海报",
                //   icon: "",
                //   color: "#3fbd5c"
                // }, {
                //   text: "客服",
                //   icon: "",
                //   color: "#ff007f"
                }],
                wxAdId: [],
                gg_wode: [],
                sharepic: "",
                more: [],
                animationTime: !1,
                adShow: !0
              }
            },
            onLoad: function (n) {
              this.userInfo = e.getStorageSync("$userInfo"), this.wxAdId = t.$config.wode.wxAdId, this.sharepic = t.$config.site.sharepic, "1" == t.$config.wode.more.radio && (this.more = t.$config.wode.more.list)
            },
            onReady: function () {
              this.gg_wode = t.$config.wode.gg, this.$user_login || this.$refs.userLogin.open()
            },
            onShow: function () {
              this.adShow = !0, this.theme = t.$theme
            },
            onHide: function () {
              this.adShow = !1
            },
            computed: {},
            methods: {
              onGotUserInfo: function (n) {
                var i = this;
                e.login({
                  provider: "weixin",
                  success: function (o) {
                    var r = n.detail.userInfo,
                      u = o.code,
                      a = i.md5(r.avatarUrl + i.cjurl + i.mark + r.nickName + t.$platform + t.$scene.scene + "App.User.WxRegister" + u),
                      s = i.cjurl + "wxApi/public/?service=App.User.WxRegister&user=" + u + "&name=" + r.nickName + "&avatarUrl=" + r.avatarUrl + "&mark=" + i.mark + "&platform=" + t.$platform + "&scene=" + t.$scene.scene + "&host=" + i.cjurl + "&sign=" + a;
                    i.api.wxRegister(s).then((function (n) {
                      n ? (i.$refs.userLogin.close(), i.userInfo = e.getStorageSync("$userInfo")) : i.$refs.userLogin.open()
                    }))
                  }
                })
              },
              piaNum: function () {
                var n = this,
                  t = this;
                if (!t.animationTime) {
                  t.animationTime = !0;
                  var i = this.md5("App.User.PidNum" + this.userInfo.user_id),
                    o = this.cjurl + "wxApi/public/?service=App.User.PidNum&uid=" + this.userInfo.user_id + "&sign=" + i;
                  this.api.apiRequest(o).then((function (t) {
                    200 == t.Code && (n.userInfo.user_pid_num = t.Data.user_pid_num, e.setStorageSync("$userInfo", n.userInfo))
                  })), setTimeout((function () {
                    t.animationTime = !1
                  }), 5e3)
                }
              },
              listclick: function (n) {
                switch (n) {
                  case 0:
                    e.navigateTo({
                      url: "../history/history?tab=0"
                    });
                    break;
                  case 1:
                    e.navigateTo({
                      url: "../history/history?tab=1"
                    });
                    break;
                  case 2:
                    this.sharepic && wx.previewImage({
                      current: this.sharepic,
                      urls: [this.sharepic]
                    });
                    break;
                  case 3:
                    "0" == t.$config.site.kefu.type ? (console.log("$web"), e.setStorageSync("$web", t.$config.site.kefu.url), e.navigateTo({
                      url: "../web/web"
                    })) : t.$config.site.kefu.url && wx.previewImage({
                      current: t.$config.site.kefu.url,
                      urls: [t.$config.site.kefu.url]
                    });
                    break
                }
              },
              shareButton: function () {
                var n = this;
                e.getImageInfo({
                  src: n.sharepic,
                  success: function (t) {
                    e.saveImageToPhotosAlbum({
                      filePath: t.path,
                      success: function () {
                        n.$refs.share.close(), e.showToast({
                          title: "图片保存成功，可以去分享啦~",
                          duration: 2e3
                        })
                      },
                      fail: function () {
                        n.$refs.share.close(), e.showToast({
                          title: "保存失败，长按保存试试",
                          duration: 2e3,
                          icon: "none"
                        })
                      }
                    })
                  }
                })
              },
              moreClick: function (n) {
                n.indexOf("pages") >= 0 ? e.navigateTo({
                  url: n
                }) : e.navigateToMiniProgram({
                  appId: n,
                  path: "pages/index/index",
                  success: function (e) {}
                })
              }
            }
          };
        n.default = i
      }).call(this, t("543d")["default"])
    }
  },
  [
    ["8bc4", "common/runtime", "common/vendor"]
  ]
]);