
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    opacity: 0,
    displayMask: 0.9,
    target: "",
    clienty: 0,
    scroll:true,
  },
  onLoad(e) {
    if(e.display&&e.display=='none'){
      this.setData({
        displayMask: e.display,
      })
    }
    if(e.target&&e.target=='index'){
      this.setData({
        scroll: false,
      })
      setTimeout(function(){
        this.setData({
          target: e.target,

          scroll: true,
        })
      }.bind(this),200);
    }
    try {
      var res = wx.getSystemInfoSync();
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      this.setData({
        width: windowWidth,
        height: windowHeight
      })
    } catch (e) {
      console.error('getSystemInfoSync failed!')
    }
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear'
    })

    this.animation = animation

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translateY(-30).step()
      this.setData({
        animationData: animation.export(),
        opacity: 1
      })
    }.bind(this), 1000)
  },

  eventHandle: function (e) {
    var that = this;
    this.setData({
      displayMask: 'none',
      target: 'one',
    })
  },

  btnBottomOne: function (e) {
    this.setData({
      target: "two"
    })
  },

  btnBottomTwo: function (e) {
    this.setData({
      target: "three"
    })
  },

  btnBottomThree: function (e) {
    this.setData({
      target: "index"
    })
  },

  btnUpOne: function (e) {
    this.setData({
      target: "one"
    })
  },

  jumpHandleDeviceChoose: function (e) {
    wx.navigateTo({
      url: '../deviceChoose/deviceChoose',
    })
  },

  jumpHandleTips: function (e) {
    wx.showToast({
      title: '敬请期待',
      icon: 'loading',
      duration: 2000
    })
  },
  jumpHandleRight: function (e) {
    wx.navigateTo({
      url: '../yrz/yrz',
    })
  },

  jumpHandleMoneySave: function (e) {
    wx.navigateTo({
      url: '../moneySave/moneySave',
    })
  },

  jumpHandleEnergySave: function (e) {
    wx.navigateTo({
      url: '../energySave/energySave',
    })
  },
  moveEndTow(e) {
    if (e.changedTouches[0].clientY < this.data.clienty) {
      this.setData({
        target: 'two',
      })
    }
  },
  moveStartTow(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
    })
  },
  moveEndThree(e) {
    if (e.changedTouches[0].clientY <= this.data.clienty) {
      this.setData({
        target: 'three',
      })
    } else {
      this.setData({
        target: 'one',
      })
    }
  },
  moveStartThree(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
    })
  },
  moveEndFour(e) {
    if (e.changedTouches[0].clientY <= this.data.clienty) {
      this.setData({
        target: 'index',
      })
    } else {
      this.setData({
        target: 'two',
      })
    }
  },
  moveStartFour(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
    })
  },
  moveEndIndex(e) {
    if (e.changedTouches[0].clientY > this.data.clienty) {
      this.setData({
        target: 'three',
      })
    }
  },
  moveStartIndex(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
    })
  }
})
