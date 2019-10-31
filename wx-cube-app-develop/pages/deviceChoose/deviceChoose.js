// moneySave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target: "",
    clienty: 0,
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    scroll:false,
    homeSizeNum:'90',
    people:'小于5',
    ys:'经济型',
    hx:'三室一厅',
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
      scroll:true,
      stepOne:true,
    })
  },


  moveEndOne(e) {
    if (e.changedTouches[0].clientY <= this.data.clienty) {
      this.setData({
        target: 'workFlow',
      })
      setTimeout(function(){
        this.setData({
          scroll: false,
        })
      }.bind(this),300)
    }
  },
  toPjd() {
    let data=this.data;
    wx.navigateTo({
      url: '/pages/pjdResult/pjdResult?peopleNum=' + data.people + '&homesize=' + data.homeSizeNum + '&ys=' + data.ys + '&hx=' + data.hx,
    })
  },

  stepOneHandle: function () {
    this.setData({
      stepOne: true,
      stepTwo: false,
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
  choosePgf(){
    this.setData({
      people: '大于5',
    })
  },
  choosePlf() {
    this.setData({
      people: '小于5',
    })
  },
  homeSize(e){
    this.setData({
      homeSizeNum: e.detail.value,
    })
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
  ysJjx(){
    this.setData({
      ys:'经济型',
    })
  },
  ysGdx() {
    this.setData({
      ys: '高档型',
    })
  },
  lset(){
    this.setData({
      hx: '二室二厅',
    })
  },
  ssyt() {
    this.setData({
      hx: '三室一厅',
    })
  },
  sset() {
    this.setData({
      hx: '三室二厅',
    })
  },
  siset() {
    this.setData({
      hx: '四室二厅',
    })
  },
  wset() {
    this.setData({
      hx: '五室二厅',
    })
  },
  lsyt() {
    this.setData({
      hx: '二室一厅',
    })
  },
})