(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/kankan/kankan"], {
    "05aa": function (i, t, e) {
      "use strict";
      e.d(t, "b", (function () {
        return a
      })), e.d(t, "c", (function () {
        return o
      })), e.d(t, "a", (function () {
        return n
      }));
      var n = {
          uniBar: function () {
            return Promise.all([e.e("common/vendor"), e.e("components/uni-bar/uni-bar")]).then(e.bind(null, "2814"))
          },
          narBar: function () {
            return e.e("components/narBar/narBar").then(e.bind(null, "4f20"))
          },
          customAd: function () {
            return e.e("components/custom-ad/custom-ad").then(e.bind(null, "d96e"))
          },
          uniAd: function () {
            return e.e("components/uni-ad/uni-ad").then(e.bind(null, "2c61"))
          },
          strugglerUniappAddTip: function () {
            return e.e("components/struggler-uniapp-add-tip/struggler-uniapp-add-tip").then(e.bind(null, "ca6e"))
          },
          uniPopup: function () {
            return e.e("components/uni-popup/uni-popup").then(e.bind(null, "3982"))
          },
          reverseList: function () {
            return Promise.all([e.e("common/vendor"), e.e("components/reverse-list/reverse-list")]).then(e.bind(null, "de5a"))
          },
          message: function () {
            return e.e("components/message/message").then(e.bind(null, "c302"))
          }
        },
        a = function () {
          var i = this,
            t = i.$createElement;
          i._self._c
        },
        o = []
    },
    "68ac": function (i, t, e) {},
    "7a34": function (i, t, e) {
      "use strict";
      (function (i) {
        e("880b");
        n(e("66fd"));
        var t = n(e("8b09"));

        function n(i) {
          return i && i.__esModule ? i : {
            default: i
          }
        }
        i(t.default)
      }).call(this, e("543d")["createPage"])
    },
    "8b09": function (i, t, e) {
      "use strict";
      e.r(t);
      var n = e("05aa"),
        a = e("a16e");
      for (var o in a) "default" !== o && function (i) {
        e.d(t, i, (function () {
          return a[i]
        }))
      }(o);
      e("f055");
      var s, d = e("f0c5"),
        r = Object(d["a"])(a["default"], n["b"], n["c"], !1, null, "22d9c77c", null, !1, n["a"], s);
      t["default"] = r.exports
    },
    a16e: function (i, t, e) {
      "use strict";
      e.r(t);
      var n = e("a8f8"),
        a = e.n(n);
      for (var o in n) "default" !== o && function (i) {
        e.d(t, i, (function () {
          return n[i]
        }))
      }(o);
      t["default"] = a.a
    },
    a8f8: function (i, t, e) {
      "use strict";
      (function (i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = o(e("9b1e"));

        function a() {
          if ("function" !== typeof WeakMap) return null;
          var i = new WeakMap;
          return a = function () {
            return i
          }, i
        }

        function o(i) {
          if (i && i.__esModule) return i;
          if (null === i || "object" !== typeof i && "function" !== typeof i) return {
            default: i
          };
          var t = a();
          if (t && t.has(i)) return t.get(i);
          var e = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in i)
            if (Object.prototype.hasOwnProperty.call(i, o)) {
              var s = n ? Object.getOwnPropertyDescriptor(i, o) : null;
              s && (s.get || s.set) ? Object.defineProperty(e, o, s) : e[o] = i[o]
            } return e.default = i, t && t.set(i, e), e
        }
        var s = getApp().globalData,
          d = null,
          r = {
            data: function () {
              return {
                theme: s.$theme,
                ShowPlay: !0,
                isPlay: !1,
                voddata: {},
                isSc: !1,
                laiyuanindex: 0,
                index: 0,
                episode: 0,
                showContent: !1,
                likedata: {},
                vod_content: "",
                showControls: !0,
                vodxuanji: !1,
                initialTime: 0,
                currentTime: 0,
                objectFit: "contain",
                vod_tip: !0,
                tipShow: !1,
                tipText: "??????????????????",
                playurl: "",
                playIcon: "???",
                xuanjiid: "g0",
                wxAdId: [],
                adNum: 0,
                second: 0,
                points: !0,
                videoPlay: !1,
                myVideo: "",
                adPlay: !0,
                maskClick: !1,
                mylist: [{
                  text: "????????????",
                  icon: "???",
                  color: "#55aaff"
                }, {
                  text: "????????????",
                  icon: "???",
                  color: "#ff8e3d"
                }, {
                  text: "????????????",
                  icon: "???",
                  color: "#aa007f"
                // }, {
                //   text: "????????????",
                //   icon: "???",
                //   color: "#ff007f"
                }],
                rate: "1.0",
                adViewContent: "??????????????????????????????!",
                gg: [],
                notice: "",
                fullscreen: !1,
                showGz: !0,
                danmuList: [{
                //   text: "???????????????????????????",
                //   color: "#ff0000",
                //   time: 1
                // }, {
                //   text: "?????????????????????,????????????????????????,??????????????????????????????!",
                //   color: "#ff00ff",
                //   time: 3
                }],
                // message: !1,
                // statement: "????????????:???????????????????????????????????????,?????????????????????,?????????????????????,???????????????????????????,???????????????,??????????????????,??????!"
              }
            },
            onLoad: function (t) {
              var e = this,
                n = this;
              this.wxAdId = s.$config.play.wxAdId, this.gg = s.$config.play.gg, this.second = parseInt(s.$config.play.second), this.danmuList = s.$config.play.danmuList, this.statement = s.$config.wode.statement, s.$wxverify || "" == t.id ? (s.$wxverify = !0, this.BackPage()) : (this.isPlay = !0, i.getStorageSync("$voddata").vod_id == t.id && (this.voddata = i.getStorageSync("$voddata"), this.getLSDB())), wx.createInterstitialAd && this.wxAdId.cpId && (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: this.wxAdId.cpId
              }), this.interstitialAd.onLoad((function () {})), this.interstitialAd.onError((function (i) {})), this.interstitialAd.onClose((function () {
                e.interstitialAd.destroy(), e.interstitialAd = null
              }))), wx.createRewardedVideoAd && this.wxAdId.jlspId && (d = wx.createRewardedVideoAd({
                adUnitId: this.wxAdId.jlspId
              }), d.onLoad((function () {})), d.onError((function (i) {})), d.onClose((function (t) {
                if (t && t.isEnded) {
                  s.$points = !1, e.myVideo.play();
                  var a = i.getStorageSync("$adNum");
                  i.setStorageSync("$adNum", a + 1);
                  var o = parseInt(Date.parse(new Date)) / 1e3;
                  i.setStorageSync("$interval", o)
                } else {
                  "1" == s.$config.play.enforce && (n.points = !0);
                  var d = "?????????????????????????????????,????????????2???????????????!";
                  s.$config.play.adMsg.hasOwnProperty("close") && (d = s.$config.play.adMsg.close), i.showModal({
                    content: d,
                    confirmColor: "#ff9900",
                    success: function (i) {
                      i.confirm ? n.adTab() : n.myVideo.play()
                    }
                  })
                }
              })))
            },
            onReady: function () {
              var t = this;
              t.myVideo = i.createVideoContext("myVideo"), t.interstitialAd && t.wxAdId.cpId && setTimeout((function () {
                t.interstitialAd.show().catch((function (i) {
                  console.error(i)
                }))
              }), 1e3)
            },
            onShow: function () {
              i.setKeepScreenOn({
                keepScreenOn: !0
              })
            },
            onHide: function () {
              i.setKeepScreenOn({
                keepScreenOn: !1
              })
            },
            onShareAppMessage: function (t) {
              var e = i.getStorageSync("$userInfo").user_id,
                n = "/pages/detail/detail?id=" + this.voddata.vod_id;
              return e && (n = "pages/detail/detail?uid=" + e + "&id=" + this.voddata.vod_id), {
                title: this.voddata.vod_name + "????????????",
                path: n,
                imageUrl: this.voddata.vod_pic,
                success: function (i) {
                  console.log("success")
                },
                fail: function () {},
                complete: function () {}
              }
            },
            onBackPress: function (t) {
              this.addDB(), i.setKeepScreenOn({
                keepScreenOn: !1
              })
            },
            onUnload: function () {
              this.addDB(), i.setKeepScreenOn({
                keepScreenOn: !1
              })
            },
            mounted: function () {},
            methods: {
              contenTab: function () {
                this.showContent = !this.showContent
              },
              vodlist: function () {
                this.vodxuanji = !1, this.showControls = !0
              },
              themeTab: function () {
                this.fullscreen ? (this.showControls = !1, this.vodxuanji = !0) : "black" == this.theme ? this.theme = "white" : this.theme = "black"
              },
              refresh: function (t) {
                var e = this;
                i.showLoading({
                  mask: !0,
                  title: "?????????..."
                });
                var n = this,
                  a = this.md5(this.mark + "App.Mov.GetOnlineMvById" + t),
                  o = this.cjurl + "wxApi/public/?service=App.Mov.GetOnlineMvById&vodid=" + t + "&mark=" + this.mark + "&sign=" + a;
                this.api.apiRequest(o).then((function (t) {
                  200 == t.Code && (n.voddata = e.api.vodCl(t.Data[0]), n.getLSDB(), i.hideLoading())
                }))
              },
              getlike: function (t) {
                var e = this,
                  n = i.getStorageSync("$likedata");
                if (void 0 != t && 23 != t || (t = 1), "" == n || n[0].type_id != t) {
                  var a = this.md5(t + "121App.Mov.GetHomeLevelAll"),
                    o = cjurl + "wxApi/public/?service=App.Mov.GetHomeLevelAll&level=" + t + "&limit=12&page=1&sign=" + a;
                  this.api.apiRequest(o).then((function (i) {
                    200 == i.Code && (e.likedata = i.Data.list)
                  }))
                } else this.likedata = n
              },
              getDate: function (i) {
                i != this.voddata.vod_id && (this.myVideo.stop(), this.playurl = "", this.addDB(), this.refresh(i))
              },
              getLSDB: function () {
                var i = this.db.getLSDB(this.voddata.vod_id);
                "{}" != JSON.stringify(i) ? (this.laiyuanindex = Number(i.laiyuanindex), this.index = Number(i.index), this.initialTime = Number(i.initialTime), this.isSc = i.shoucang, this.getPlayUrl(this.laiyuanindex, this.index)) : (this.isSc = !1, this.laiyuanindex = 0, this.index = 0, this.initialTime = 0, this.getPlayUrl(this.laiyuanindex, this.index)), "1" == s.$config.site.message.radio && (this.message = !0)
              },
              addDB: function () {
                var i = {
                  vod_id: this.voddata.vod_id,
                  vod_pic: this.voddata.vod_pic,
                  vod_name: this.voddata.vod_name,
                  lishi: !0,
                  shoucang: this.isSc,
                  laiyuanindex: this.laiyuanindex,
                  initialTime: this.currentTime,
                  index: this.index
                };
                this.db.setLSDB(i)
              },
              scTab: function (t, e) {
                this.isSc = !this.isSc;
                var n = {
                  vod_id: e.vod_id,
                  vod_pic: e.vod_pic,
                  vod_name: e.vod_name,
                  lishi: !0,
                  shoucang: this.isSc,
                  laiyuanindex: this.laiyuanindex,
                  initialTime: this.currentTime,
                  index: this.index
                };
                this.db.scDB(n);
                var a = "????????????";
                a = this.isSc ? "????????????" : "????????????", i.showToast({
                  title: a,
                  icon: "success",
                  duration: 2e3
                })
              },
              getPlayUrl: function (i, t) {
                var e = this.voddata.vod_play_url[i][1][t].src;
                this.episode = this.voddata.vod_play_url[i][1].length, this.adPlay = !0, -1 != e.indexOf(".m3u8") || -1 != e.indexOf(".mp4") ? (this.tipShow = !0, this.tipText = "????????????,????????????", this.playurl = e) : this.getjx(e, this.voddata.vod_play_url[i][3])
              },
              getjx: function (i, t) {
                var e = this;
                i = n.b64_encode(i), this.tipShow = !0, this.tipText = "??????????????????";
                var a = this.md5(t + this.mark + "App.JX.VipJX" + i),
                  o = this.cjurl + "wxApi/public/?service=App.JX.VipJX&url=" + i + "&form=" + t + "&mark=" + this.mark + "&sign=" + a;
                this.api.apiRequest(o).then((function (i) {
                  200 == i.Code && (200 == i.Data.code ? (e.playurl = i.Data.url, e.tipText = "????????????,????????????") : (e.tipText = "????????????,??????????????????", e.laiyuanindex = Number(e.laiyuanindex), e.laiyuanindex + 1 < e.voddata.vod_play_from.length ? (e.laiyuanindex += 1, e.getPlayUrl(e.laiyuanindex, e.index)) : e.tipText = "????????????,??????????????????"))
                }), (function (i) {
                  e.tipText = "????????????,??????????????????", e.laiyuanindex + 1 < e.voddata.vod_play_from.length ? (e.laiyuanindex += 1, e.getPlayUrl(e.laiyuanindex, e.index)) : e.tipText = "????????????,??????????????????"
                }))
              },
              xuanjitab: function (i) {
                this.index != i && (this.myVideo.pause(), this.mylist[1].icon = "???", this.rate = "1.0", this.index = i, this.initialTime = 0, this.playurl = "", this.getPlayUrl(this.laiyuanindex, this.index)), this.$refs.xuanjipopup.close()
              },
              laiyuanClick: function (i) {
                console.log(this.initialTime), this.laiyuanindex != i && (this.mylist[1].icon = "???", this.rate = "1.0", this.laiyuanindex = i, this.initialTime = this.currentTime, this.myVideo.stop(), this.getPlayUrl(this.laiyuanindex, this.index))
              },
              laiyuanTab: function (t) {
                switch (t) {
                  case 0:
                    this.$refs.xuanjipopup.open();
                    break;
                  case 1:
                    var e = ["1.0", "1.25", "1.5", "2.0"],
                      n = ["???", "???", "???", "???"],
                      a = e.indexOf(this.rate);
                    3 == a ? a = 0 : a += 1, this.mylist[1].icon = n[a], this.rate = e[a], this.myVideo.playbackRate(Number(e[a]));
                    break;
                  case 2:
                    i.setClipboardData({
                      data: this.playurl,
                      success: function (t) {
                        i.showToast({
                          title: "????????????,???????????????!",
                          icon: "none",
                          duration: 5e3
                        })
                      }
                    });
                    break;
                  case 3:
                    "0" == s.$config.site.kefu.type ? (i.setStorageSync("$web", s.$config.site.kefu.url), i.navigateTo({
                      url: "../web/web"
                    })) : s.$config.site.kefu.url && wx.previewImage({
                      current: s.$config.site.kefu.url,
                      urls: [s.$config.site.kefu.url]
                    });
                    break
                }
              },
              Reverse: function () {
                this.$refs.xuanjipopup.open()
              },
              BackPage: function () {
                i.navigateBack({
                  delta: 1
                })
              },
              BackIndex: function () {
                i.switchTab({
                  url: "/pages/index/index"
                })
              },
              play: function () {
                this.videoPlay = !0, this.tipShow = !1
              },
              pause: function () {
                this.videoPlay = !1
              },
              ended: function () {
                0 != this.episode && this.index + 1 < this.episode ? (this.index = this.index + 1, this.mylist[1].icon = "???", this.rate = "1.0", this.initialTime = 0, this.playurl = "", this.tipShow = !0, this.tipText = "?????????????????????...", this.getPlayUrl(this.laiyuanindex, this.index)) : this.myVideo.stop()
              },
              clickFull: function (i) {
                "contain" == this.objectFit ? this.objectFit = "fill" : this.objectFit = "contain"
              },
              controlstoggle: function (i) {
                this.vod_tip = i.detail.show
              },
              fullscreenchange: function (i) {
                this.fullscreen = i.detail.fullScreen
              },
              seek: function (i) {
                this.myVideo.seek(this.currentTime + i)
              },
              timeupdate: function (t) {
                var e = this;
                if (e.currentTime = Math.floor(t.detail.currentTime), e.points && s.$points && e.currentTime > e.second && e.videoPlay && d) {
                  e.points = !1, "1" == s.$config.play.enforce && (e.videoPlay = !1, e.myVideo.pause());
                  var n = "?????????,?????????????????????????????????,??????????????????2?????????!";
                  s.$config.play.adMsg.hasOwnProperty("start") && (n = s.$config.play.adMsg.start), console.log("????????????"), i.showModal({
                    content: n,
                    success: function (i) {
                      i.confirm ? (e.myVideo.pause(), e.videoPlay = !1, e.fullscreen && e.myVideo.exitFullScreen(), setTimeout((function () {
                        e.adTab()
                      }), 500)) : "1" == s.$config.play.enforce && (e.points = !0, e.videoPlay = !1, e.myVideo.pause())
                    }
                  })
                }
              },
              loadedmetadata: function () {
                console.log("????????????")
              },
              adTab: function () {
                var i = this;
                d && d.show().catch((function () {
                  d.load().then((function () {
                    return d.show()
                  })).catch((function (t) {
                    s.$points = !1, i.myVideo.play()
                  }))
                }))
              },
              laiyuanIcon: function () {
                switch (this.mylist[0].text = this.voddata.vod_play_from[this.laiyuanindex], this.voddata.vod_play_url[this.laiyuanindex][0]) {
                  case "qq":
                    this.mylist[0].icon = "???";
                    break;
                  case "qiyi":
                    this.mylist[0].icon = "???";
                    break;
                  case "youku":
                    this.mylist[0].icon = "???";
                    break;
                  case "mgtv":
                    this.mylist[0].icon = "???";
                    break;
                  default:
                    this.mylist[0].icon = "???"
                }
              },
              barRight: function () {},
              binderror: function (i) {
                this.showGz = !1
              },
              bindload: function (i) {
                this.showGz = !0
              }
            },
            watch: {
              index: {
                handler: function (t, e) {
                  var n = t - 2,
                    a = "g" + n;
                  this.xuanjiid = a;
                  var o = parseInt(Date.parse(new Date)) / 1e3;
                  this.points = !0, "1" == s.$config.play.isPoints && i.getStorageSync("$adNum") < parseInt(s.$config.play.num) && o - i.getStorageSync("$interval") > parseInt(s.$config.play.interval) && (s.$points = !0)
                }
              },
              videoPlay: {
                handler: function (t, e) {
                  t ? (this.tipShow = !1, i.setKeepScreenOn({
                    keepScreenOn: !0
                  })) : (i.setKeepScreenOn({
                    keepScreenOn: !1
                  }), this.myVideo.pause())
                }
              }
            },
            computed: {
              scrollViewId: function () {
                return this.xuanjiid
              }
            }
          };
        t.default = r
      }).call(this, e("543d")["default"])
    },
    f055: function (i, t, e) {
      "use strict";
      var n = e("68ac"),
        a = e.n(n);
      a.a
    }
  },
  [
    ["7a34", "common/runtime", "common/vendor"]
  ]
]);