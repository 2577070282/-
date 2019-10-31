Page({
  data: {
    yw: '',
  },
  back(){
    wx.navigateBack({

    })
  },
  wybl(){
    wx.showToast({
      title: '敬请期待',
      icon:'loading',
      duration:1500,
    })
  },
  onLoad(e) {
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
    this.setData({
      yw: e.yw,
    })
    //线性图

    windowWidth -= 40;
    let height = 160;
    let ctx = wx.createCanvasContext('fgdLine');
    let arrTime = ['0', '4:00', '8:00', '12:00', '16:00', '20:00', '24.00'];
    let arrNum = ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6']
    ctx.setStrokeStyle('#d8d9dc');
    ctx.beginPath();
    ctx.moveTo(40, height - 30);
    ctx.lineTo(windowWidth - 10, height - 30);
    ctx.moveTo(40, height - 30);
    ctx.lineTo(40, 30)
    ctx.setLineWidth(2);
    ctx.setFillStyle('#999999');
    ctx.setFontSize(16);
    ctx.setTextAlign('center');
    for (let i = 0; i < 7; i++) {
      let distance = (windowWidth - 60) / 6;
      ctx.moveTo(40 + distance * (i), height - 30);
      ctx.lineTo(40 + distance * (i), height - 35);
      ctx.fillText(arrTime[i], 40 + distance * (i), height - 10);
    }
    ctx.stroke();
    ctx.closePath();
    ctx.setStrokeStyle('#efefef');
    ctx.beginPath();

    ctx.setTextAlign('right');
    let distanceH = (height - 70) / 6
    for (let i = 0; i < 6; i++) {

      ctx.moveTo(40, height - 30 - distanceH * (i + 1));
      ctx.lineTo(windowWidth - 10, height - 30 - distanceH * (i + 1));
      ctx.fillText(arrNum[i], 35, height - 22 - distanceH * (i + 1));
    }
    ctx.closePath();
    ctx.setLineWidth(1);
    ctx.stroke();
    ctx.beginPath();
    ctx.setStrokeStyle('#00bba9')
    ctx.moveTo(40, height - 30 - distanceH * (2.88));
    ctx.lineTo(40 + (windowWidth - 60) / 6 * 2, height - 30 - distanceH * (2.88));
    ctx.moveTo(40 + (windowWidth - 60) / 6 * 2, height - 30 - distanceH * (2.88));
    ctx.lineTo(40 + (windowWidth - 60) / 6 * 2, height - 30 - distanceH * (5.68));
    ctx.moveTo(40 + (windowWidth - 60) / 6 * 2, height - 30 - distanceH * (5.68));
    ctx.lineTo(40 + (windowWidth - 60) / 24 * 22, height - 30 - distanceH * (5.68));
    ctx.moveTo(40 + (windowWidth - 60) / 24 * 22, height - 30 - distanceH * (5.68));
    ctx.lineTo(40 + (windowWidth - 60) / 24 * 22, height - 30 - distanceH * (2.88));
    ctx.moveTo(40 + (windowWidth - 60) / 24 * 22, height - 30 - distanceH * (2.88));
    ctx.lineTo(40 + (windowWidth - 60), height - 30 - distanceH * (2.88));
    ctx.closePath()
    ctx.setLineWidth(2);
    ctx.stroke();
    ctx.beginPath();
    ctx.setStrokeStyle('#c7c7c7');
    ctx.moveTo(40, height - 30 - distanceH * (5.38));
    ctx.lineTo(40 + (windowWidth - 60), height - 30 - distanceH * (5.38));
    ctx.closePath()
    ctx.setLineWidth(2);
    ctx.stroke();
    ctx.fillText('元', 40, 20);
    ctx.setFontSize(12);
    ctx.setTextAlign('right');
    ctx.fillText('非峰谷电电价', windowWidth / 2 + 20, 20);
    ctx.beginPath();
    ctx.setFillStyle('#c7c7c7');

    ctx.arc(windowWidth / 2 + 20 - 90, 16, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.setTextAlign('left');
    ctx.setFillStyle('#333333');
    ctx.fillText('峰谷电电价', windowWidth / 2 + 60, 20);
    ctx.beginPath();
    ctx.setFillStyle('#00bba9');

    ctx.arc(windowWidth / 2 + 45, 16, 6, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.draw();
  },
})
