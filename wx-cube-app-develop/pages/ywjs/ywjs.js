Page({
  data:{
    yw:'',
  },
  onLoad(e){
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
    console.log(e.yw)
    this.setData({
      yw: e.yw,
    })
  },
  back(){
    wx.navigateBack({
      
    })
  }
})