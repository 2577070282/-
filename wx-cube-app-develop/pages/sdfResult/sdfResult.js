var wxCharts = require('../../utils/wxcharts.js');
Page({

  /**
   * 页面的初始数据
   */
  data:{
    isQcdf:true,
    shFgd: true,
    sdf:0,
    percent:'',
  },
  toJsFgd(){
    wx.navigateTo({
      url: '/pages/ywjs/ywjs?yw=fgd',
    })
  },
  toJsYhdrk(){
    wx.navigateTo({
      url: '/pages/ywjs/ywjs?yw=yhdrk',
    })
  },
  toBlFgd() {
    wx.navigateTo({
      url: '/pages/blyw/blyw?yw=fgd',
    })
  },
  toBlYhdrk() {
    wx.navigateTo({
      url: '/pages/blyw/blyw?yw=yhdrk',
    })
  },
  back(){
    wx.reLaunch({
      url: '/pages/index/index?display=none&target=index',
    })
  },
  onLoad(e){
    function time(str) {
      let arr = str.split(':');
      return (Number(arr[0]) + (Number(arr[1]) / 60)).toFixed(2);
    }
    if (e.isQcdf=='true') {
      let qcTime = time(e.qcTime);
      let outTime = time(e.outTime);
      let backTime = time(e.backTime);
      let sleepTime = time(e.sleepTime);
      let gTime = 0, fTime = 0;
      let zdl = Number(e.DForDL);
      let percent;
      if (qcTime < 8 && outTime < 8) {
        gTime += (outTime - qcTime);
      } else if (qcTime < 8 && outTime > 8) {
        gTime += (8 - qcTime);
        fTime += (outTime - 8);
      } else if (qcTime > 8 && outTime > 8) {
        fTime += (outTime - qcTime);
      }
      if (backTime < 22 && sleepTime < 22) {
        fTime += (sleepTime - backTime);
      } else if (backTime < 22 && sleepTime > 22) {
        fTime += (22 - backTime);
        gTime += (sleepTime - 22);
      } else if (backTime > 22 && sleepTime > 22) {
        gTime += (sleepTime - backTime);
      }
      if (e.per == 'perMonth') {
        zdl *= 12;
      }

      if (e.df === 'true') {
        zdl /= 0.538;
      }
      let yj = (e.per == 'perMonth') ? zdl/12:zdl;
      console.log(yj)
      percent = yj<10?(100-20+'%'):
                yj < 41 ? (100 - 30 + '%'):
                yj < 76 ? (100 - 40 + '%'):
                yj < 114 ? (100 - 50 + '%'):
                yj < 157 ? (100 - 60 + '%'):
                yj < 211 ? (100 - 70 + '%'):
                yj < 288 ? (100 - 80 + '%'):
                yj < 435 ? (100 - 90 + '%'):'1%';
      let gdf = zdl * gTime / (gTime + fTime) * (0.538 - 0.288);
      let fdf = zdl * fTime / (gTime + fTime) * (0.538 - 0.568);
      this.setData({
        sdf: Math.round(gdf - fdf),
        shFgd: gTime / (gTime + fTime) > 0.11,
        percent: percent,
      })
    }else{
      let zxsj = e.zxsj;
      this.setData({
        shFgd: zxsj!=='黑白颠倒',
      })
    }
    this.setData({
      personNum: e.personNum,
      isQcdf: e.isQcdf=='true',
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
    
  },
})
