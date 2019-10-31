// moneySave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target: "",
    clienty: 0,
    stepOne: false,
    stepOneYes: false,
    stepTwo: false,
    stepThree: false,
    scroll: false,
    personNum: '小于5',
    outTime: '08:00',
    backTime: '18:30',
    upTime: '07:00',
    sleepTime: '23:00',
    df: true,//
    dl: false,//
    DForDL: 0,//
    per: 'perMonth',//
    zxsj:'朝九晚五',
  },
  changeOutTime(e) {
    this.setData({
      outTime: e.detail.value
    })
  },
  changeBackTime(e) {
    this.setData({
      backTime: e.detail.value
    })
  },
  changeUpTime(e) {
    this.setData({
      upTime: e.detail.value
    })
  },
  changeSleepTime(e) {
    this.setData({
      sleepTime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  

  moveStartOne(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
      scroll: true,
      stepOne: true,
    })
  },


  moveEndOne(e) {
    if (e.changedTouches[0].clientY <= this.data.clienty) {
      this.setData({
        target: 'workFlow',
      })
      setTimeout(function () {
        this.setData({
          scroll: false,
        })
      }.bind(this), 300)
    }
  },

  moveStartTwo(e) {
    this.setData({
      clienty: e.changedTouches[0].clientY,
    })
  },


  moveEndTwo(e) {
    if (e.changedTouches[0].clientY > this.data.clienty) {
      this.setData({
        target: 'introduce',
      })
    }
  },
  zjww(){
    this.setData({
      zxsj: '朝九晚五',
    })
  },
  zcwg() {
    this.setData({
      zxsj: '早出晚归',
    })
  },
  wcyg() {
    this.setData({
      zxsj: '午出夜归',
    })
  },
  hbdd() {
    this.setData({
      zxsj: '黑白颠倒',
    })
  },
  toSdf() {
    let data=this.data;
    wx.navigateTo({
      url: '/pages/sdfResult/sdfResult?personNum=' + data.personNum + '&isQcdf=' + data.stepOneYes + '&qcTime=' + data.upTime + '&outTime=' + data.outTime + '&backTime=' + data.backTime + '&sleepTime=' + data.sleepTime + '&DForDL=' + data.DForDL + '&per=' + data.per + '&dl=' + data.dl + '&df=' + data.df + '&zxsj=' + data.zxsj,
    })
  },

  stepOneHandle: function () {
    this.setData({
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      stepOneYes: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },
  iDForDL(e){
    this.setData({
      DForDL: e.detail.value ? e.detail.value:0,
    })
  },
  perYear(){
    this.setData({
      per: 'perYear'
    })
  },
  perMonth() {
    this.setData({
      per: 'perMonth'
    })
  },
  idl(){
    this.setData({
      dl: true,
      df:false,
    })
  },
  idf() {
    this.setData({
      df: true,
      dl: false,
    })
  },

  stepTwoYesHandle: function () {
    if (this.data.DForDL == 0) {
      wx.showToast({
        title: '请输入电费或者电量',
        icon: 'loading',
      })
      return;
    }
    this.setData({
      stepTwo: true,
      stepOne: false,
      stepThree: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },
  stepTwoHandle: function () {
    this.setData({
      stepTwo: true,
      stepOne: false,
      stepThree: false,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },


  stepThreeHandle: function () {
    this.setData({
      stepThree: true,
      stepOne: false,
      stepTwo: false,
      
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },

  stepOneYesHandle: function () {
    this.setData({
      stepThree: false,
      stepOne: true,
      stepTwo: false,
      stepOneYes: true,
      scroll: true,
    })
    setTimeout(function () {
      this.setData({
        target: 'workFlow',
      })
    }.bind(this), 20)
    setTimeout(function () {
      this.setData({
        scroll: false,
      })
    }.bind(this), 300)
  },
  ltFour(){
    this.setData({
      personNum: '小于5',
    })
  },
  gtFive() {
    this.setData({
      personNum: '大于5',
    })
  },

})