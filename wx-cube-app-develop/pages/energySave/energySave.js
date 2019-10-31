// moneySave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    target: "",
    clienty: 0,
    step: false,
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepOneAC: false,
    stepOneShower: false,
    scroll: false,
    hx: '三室一厅',
    ktps:2,
    ktdj:'三级',
    ktnf:'2010',
    rsqgl:'1250',
    rsqdj: '三级',
    rsqnf: '2010',
    ylc:0,
    yh:0,
    rqf:0,
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
      step: true,
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
  carYlc(e){
    this.setData({
      ylc: e.detail.value,
    })
  },
  carYh(e) {
    this.setData({
      yh: e.detail.value,
    })
  },
  iRqf(e) {
    this.setData({
      rqf: e.detail.value,
    })
  },
  toJny() {
    let data = this.data;
    wx.navigateTo({
      url: '/pages/jnyResult/jnyResult?kt_nx=' + data.ktdj + '&kt_gl=' + data.ktps + '&kt_time=' + data.ktnf+ '&rsq_nx=' + data.rsqdj + '&rsq_gl=' + data.rsqgl + '&rsq_time=' + data.rsqnf + '&qc_lc=' + data.ylc+ '&qc_yh=' + data.yh + '&rqf=' + data.rqf+ '&hx=' + data.hx,
    })
  },

  stepHandle: function () {
    this.setData({
      step: true,
      stepOne: false,
      stepOneAC: false,
      stepOneShower: false,
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

  stepOneHandle: function () {
    this.setData({
      step: false,
      stepOne: true,
      stepOneAC: true,
      stepOneShower: false,
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
  stepOneACHandle: function () {
    this.setData({
      stepOneAC: true,
      stepOneShower: false,
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

  stepOneShowerHandle: function () {
    this.setData({
      stepOneShower: true,
      stepOneAC: false,
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
  ktps_1(e){
    this.setData({
      ktps:1,
    })
  },
  ktps_15(e) {
    this.setData({
      ktps: 1.5,
    })
  },
  ktps_2(e) {
    this.setData({
      ktps:2,
    })
  },
  ktps_3(e) {
    this.setData({
      ktps: 3,
    })
  },
  ktdj_1(){
    this.setData({
      ktdj: '一级',
    })
  },
  ktdj_2() {
    this.setData({
      ktdj: '二级',
    })
  },
  ktdj_3() {
    this.setData({
      ktdj: '三级',
    })
  },
  ktdj_4() {
    this.setData({
      ktdj: '四级',
    })
  },
  ktdj_5() {
    this.setData({
      ktdj: '五级',
    })
  },
  rsqdj_1() {
    this.setData({
      rsqdj: '一级',
    })
  },
  rsqdj_2() {
    this.setData({
      rsqdj: '二级',
    })
  },
  rsqdj_3() {
    this.setData({
     rsqdj: '三级',
    })
  },
  rsqdj_4() {
    this.setData({
      rsqdj: '四级',
    })
  },
  rsqdj_5() {
    this.setData({
      rsqdj: '五级',
    })
  },
  ktnf_2008() {
    this.setData({
      ktnf: '2008',
    })
  },
  ktnf_2009() {
    this.setData({
      ktnf: '2009',
    })
  },
  ktnf_2010() {
    this.setData({
      ktnf: '2010',
    })
  },
  ktnf_2011() {
    this.setData({
      ktnf: '2011',
    })
  },
  ktnf_2012() {
    this.setData({
      ktnf: '2012',
    })
  },
  rsqnf_2008() {
    this.setData({
      rsqnf: '2008',
    })
  },
  rsqnf_2009() {
    this.setData({
      rsqnf: '2009',
    })
  },
  rsqnf_2010() {
    this.setData({
     rsqnf: '2010',
    })
  },
  rsqnf_2011() {
    this.setData({
      rsqnf: '2011',
    })
  },
  rsqnf_2012() {
    this.setData({
      rsqnf: '2012',
    })
  },
  rsqgl_500() {
    this.setData({
      rsqgl: '500',
    })
  },
  rsqgl_1000() {
    this.setData({
      rsqgl: '1000',
    })
  },
  rsqgl_1500() {
    this.setData({
      rsqgl: '1500',
    })
  },
  rsqgl_1250() {
    this.setData({
      rsqgl: '1250',
    })
  },
  rsqgl_2000() {
    this.setData({
      rsqgl: '2000',
    })
  },
  stepTwoHandle: function () {
    this.setData({
      step: false,
      stepTwo: true,
      stepOne: false,
      stepOneAC: false,
      stepOneShower: false,
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
      step: false,
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
  lset() {
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