var wxCharts = require('../../utils/wxcharts.js');
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page1Start:0,
    top:0,
    distance:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getRank(str){
    let obj = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7 };
    return obj[str];
  },
  onLoad: function (e) {
    wx.setNavigationBarTitle({ title: '节能结论' });
    var kt_gl = Number(e.kt_gl);
    var kt_nx = this.getRank(e.kt_nx[0]);
    var kt_time = Number(e.kt_time);
    var rsq_gl = Number(e.rsq_gl);
    var rsq_nx = this.getRank(e.rsq_nx[0]);
    var rsq_time = e.rsq_time
    var qc_yh = Number(e.qc_yh);
    var qc_lc = Number(e.qc_lc);
    var rqf = Number(e.rqf);
    var hx = e.hx;
    function getAirNum(str) {
      var obj = { '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7 }
      var arr = str.split('');
      return obj[arr[0]] + obj[arr[2]]

    }
    var airNum = getAirNum(hx);
    var rsqNum = hx == '二室一厅' || hx == '二室二厅' || hx == '三室一厅' ? 1 :
      hx == '三室二厅' || hx == '四室二厅' ? 2 : 3
    var kt_fax = Math.round(kt_gl * 2000 * 1.162 * 210 / 1000 * 0.538 / (1 - 0.01 * (2016 - kt_time)) / (kt_nx === 1 ? 3.6 : kt_nx === 2 ? 3.3 : kt_nx === 3 ? 3 : kt_nx > 3 ? 2.7 : false) - kt_gl * 2000 * 1.162 * 210 / 3.6 / 1000 * 0.538) * airNum;
    var rsq_fax = Math.round(rsq_gl * 150 / (1 - 0.02 * (2016 - rsq_time)) / (rsq_nx === 1 ? 1 : rsq_nx === 2 ? 0.9 : rsq_nx === 3 ? 0.8 : rsq_nx === 4 ? 0.7 : false) * 0.538 / 1000 - rsq_gl * 150 * 0.538 / 1000) * rsqNum;
    var qc_fax = Math.round(qc_lc * qc_yh / 100 * 6 - qc_lc / 100 * 12 * (1.6 * 0.5 + 0.558 * (1 - 0.5))) * 12;
    var rqf_fax = Math.round(rqf - rqf * 0.9) * 12;
    var treeNum = Math.round((kt_fax + rsq_fax + qc_fax + rqf_fax) / 0.538 * 0.27 / 18 * 10);
    var saveNum = (kt_fax + rsq_fax + qc_fax + rqf_fax) * 10;
    this.setData({
      kt_fax: kt_fax,
      rsq_fax: rsq_fax,
      qc_fax: qc_fax,
      rqf_fax: rqf_fax,
      treeNum: treeNum,
      saveNum: saveNum
    })
    var windowWidth;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      this.setData({
        width: windowWidth,
        height: windowHeight
      })

    } catch (e) {
      console.error('getSystemInfoSync failed!')
    }
    var that=this
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '一级能效空调节省' + kt_fax + '元',
        data: kt_fax,
        color: '#00d7be',

      }, {
          name: '一级能效电热水器节省' + rsq_fax + '元',
          data: rsq_fax,
          color: '#00b7a3',
      }, {
          name: '一级能效电动汽车节省' + qc_fax + '元',
        data: qc_fax,
        color: '#43bc86',
      }, {
          name: '一级能效燃气灶节省' + rqf_fax+'元',
        data: rqf_fax,
        color: '#c0c0c0',
      }],
      width: windowWidth,
      height: (that.data.height-100)*0.55,
      dataLabel: true,
    });
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },  
  pageoneStart(e){
    this.setData({
      page1Start: e.changedTouches[0].clientY,
    })
  },
  pageoneMove(e){
    let distance = e.changedTouches[0].clientY - this.data.page1Start;
    if(distance<0){
      this.setData({
        distance: distance,
      })
    }
  },
  pageoneEnd(e){
    let distance = e.changedTouches[0].clientY - this.data.page1Start;
    let that=this;
    if (distance < 0) {
     
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: "ease",
        delay: 0
      })
      animation.translateY(-this.data.height).step();
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function(){
        that.setData(
          {
            top:-that.data.height,
            distance:0,
          }
        )
      },300)
    }
  },
  moveTow(){
    let that=this;
    let animation = wx.createAnimation({
      duration: 300,
      timingFunction: "ease",
      delay: 0
    })
    animation.translateY(-this.data.height).step();
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      that.setData(
        {
          top: -that.data.height,
          distance: 0,
        }
      )
    }, 300)
  },
  back(){
    wx.reLaunch({
      url: '/pages/index/index?display=none&target=index',
    })
  },
  pagetowStart(e) {
    this.setData({
      page1Start: e.changedTouches[0].clientY,
    })
  },
  pagetowMove(e) {
    let distance = e.changedTouches[0].clientY - this.data.page1Start;
    if (distance > 0) {
      this.setData({
        distance: distance,
      })
    }
  },
  pagetowEnd(e) {
    let distance = e.changedTouches[0].clientY - this.data.page1Start;
    let that = this;
    if (distance > 0) {

      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: "ease",
        delay: 0
      })
      animation.top(0).step();
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function () {
        that.setData(
          {
            top: 0,
            distance: 0,
          }
        )
      }, 300)
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
    
  }
})