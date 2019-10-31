Page({
  data:{
    isdown:false,
    lskt_ps: '',
    dfjgskt_ps: '',
    xfjgskt_ps: '',
    iszykt: false,
    zykt_ps: '',
    rsqRl: '',
    rsqGl: '',
    rsq_fax: 0,
    dsjGl: '',
    dsjNum: '',
    dsj_fax: 0,
    xyjKg: '',
    xyjGl: '',
    xyj_fax: 0,
    dbxRl: '',
    dbxGl: '',
    dbx_fax: 0,
    dnqGl: '',
    dnq_fax: 0,
    dfbGl: '',
    dfb_fax: 0,
    dclGl: '',
    dcl_fax: 0,
    xwjGl: '',
    xwj_fax: 0,
    yyjGl: '',
    yyj_fax: 0,
    wblGl: '',
    wbl_fax: 0,
    xdgGl: '',
    xdg_fax: 0,
    kxGl: '',
    kx_fax: 0,
    dqArr: [],
    shi:0,
  },
  toDown(){
    var down = this.data.isdown;
    this.setData({
      isdown: !down ,
    })
  },
  onLoad(e){
    let people = e.peopleNum=='小于5'?Math.floor(Math.random()*5):6;
    let homesize = Number(e.homesize);
    let ys = e.ys;
    let hx = e.hx;
    let shi=hx[0];
    let lskt_ps = 0, dfjgskt_ps = 0, xfjgskt_ps = 0, iszykt, zykt_ps = 0, kt_fax,
      rsqRl, rsqGl, rsq_fax,
      dsjNum, dsjGl, dsj_fax,
      xyjKg, xyjGl, xyj_fax,
      dbxRl, dbxGl, dbx_fax,
      dnqGl, dnq_fax = 0;
    iszykt = this.getIszykt(ys, hx, homesize);
    if (iszykt) {
      zykt_ps = this.getZyktps(ys, hx, homesize);
    } else {
      dfjgskt_ps = this.getDfjps(ys, hx);
      xfjgskt_ps = this.getXfjps(ys);
      lskt_ps = this.getLsps(hx);
    }
    let kt_zps = this.getAirps(hx, zykt_ps, xfjgskt_ps, lskt_ps);
    kt_fax = Math.round(kt_zps * 800 * 14 * 0.45 / 1000 * (ys == '高档型' ? 45 : 90) * 0.538);
    rsqRl = people < 3 ? '40L到60L' : '80L以上';
    rsqGl = people < 3 ? 2000 : 3000;
    rsq_fax = Math.round(0.538 * people * 356 * (ys == '高档型' ? 1.84 : 1.4));
    dsjGl = ys == '高档型' ? 110 : 60;
    dsjNum = this.getDsjNum(ys, hx);
    dsj_fax = Math.round(dsjNum * dsjGl / 1000 * 6 * 365 * 0.538);
    xyjKg = people < 4 ? 5 : people < 6 ? 6 : 7;
    xyjGl = people < 4 ? 300 : people < 6 ? 350 : 400;
    xyj_fax = Math.round(xyjGl / 1000 * 1 * 365 * 0.538);
    dbxRl = people < 3 ? 250 : people < 6 ? 350 : 500;
    dbxGl = people < 3 ? 100 : people < 6 ? 150 : 200;
    dbx_fax = Math.round(1.5 * 365 * 0.538);
    dnqGl = ys == '高档型' && 130;
    ys == '高档型' && (dnq_fax = Math.round(dnqGl / 1000 * 90 * 0.538 * 8 * homesize * 0.8));
    let dfbGl = 800, dfb_fax = Math.round(800 * 30 * 12 * 1.5 * 0.538 / 1000);
    let dclGl = 2000, dcl_fax = Math.round(2000 * 30 * 12 * 2.5 * 0.538 / 1000);
    let xwjGl = 1380, xwj_fax = Math.round(1380 * 1 * 30 * 12 / 1000 * 0.538);
    let yyjGl = 200, yyj_fax = Math.round(200 * 2.5 * 12 * 30 / 1000 * 0.538);
    let wblGl = 1000, wbl_fax = Math.round(1000 * 8 * 12 / 1000 * 0.538);
    let xdgGl = 500, xdg_fax = Math.round(500 / 1000 * 45 * 12 * 0.538);
    let kxGl = 1500, kx_fax = Math.round(1500 / 1000 * 10 * 12 * 0.538);
    let dqArr = [
      {
        name: '空调',
        fax: kt_fax,
        cl:'kt',
      }, {
        name: '热水器',
        fax: rsq_fax,
        cl: 'rsq',
      }, {
        name: '电视机',
        fax: dsj_fax,
        cl: 'dsj',
      }, {
        name: '洗衣机',
        fax: xyj_fax,
        cl: 'xyj',
      }, {
        name: '电冰箱',
        fax: dbx_fax,
        cl: 'dbx',
      }, {
        name: '电采暖',
        fax: dnq_fax,
        cl: 'dcn',
      }, {
        name: '电饭煲',
        fax: dfb_fax,
        cl: 'dfb',
      }, {
        name: '电磁灶',
        fax: dcl_fax,
        cl: 'dcl',
      }, {
        name: '洗碗机',
        fax: xwj_fax,
        cl: 'xwj',
      }, {
        name: '油烟机',
        fax: yyj_fax,
        cl: 'yyj',
      }, {
        name: '微波炉',
        fax: wbl_fax,
        cl: 'wbl',
      }, {
        name: '消毒柜',
        fax: xdg_fax,
        cl: 'xdg',
      }, {
        name: '烤箱/蒸箱',
        fax: kx_fax,
        cl: 'kx',
      }
    ].sort(function (a, b) {
      return b.fax - a.fax;
    })
    this.setData({
      dqArr, dqArr,
      kt_fax: kt_fax,
      kxGl: kxGl,
      kx_fax: kx_fax,
      xdgGl: xdgGl,
      xdg_fax: xdg_fax,
      yyjGl: yyjGl,
      yyj_fax: yyj_fax,
      wblGl: wblGl,
      wbl_fax: wbl_fax,
      dfbGl: dfbGl,
      dfb_fax: dfb_fax,
      dclGl: dclGl,
      dcl_fax: dcl_fax,
      xwjGl: xwjGl,
      xwj_fax: xwj_fax,
      dfjgskt_ps: dfjgskt_ps,
      xfjgskt_ps: xfjgskt_ps,
      lskt_ps: lskt_ps,
      zykt_ps: zykt_ps,
      iszykt: iszykt,
      rsqRl: rsqRl,
      rsqGl: rsqGl,
      rsq_fax: rsq_fax,
      dsjGl: dsjGl,
      dsjNum: dsjNum,
      dsj_fax: dsj_fax,
      xyjKg: xyjKg,
      xyjGl: xyjGl,
      xyj_fax: xyj_fax,
      dbxRl: dbxRl,
      dbxGl: dbxGl,
      dbx_fax: dbx_fax,
      dnqGl: dnqGl,
      dnq_fax: dnq_fax,
      hx: hx,
      ys: ys,
      size: homesize,
      shi:shi,
    })
  },
  getIszykt(ys, hx, mj) {//判断要不要中央空调
    return (ys == '高档型' && mj >= 80) || (hx !== '二室一厅' && hx !== '二室二厅' && hx !== '三室一厅' && hx !== '三室二厅');
  },
  getZyktps(ys, hx, mj) {//中央空调匹数
    return (hx !== '二室一厅' && hx !== '二室二厅' && hx !== '三室一厅' && hx !== '三室二厅') ? 8 : ys == '高档型' && mj <= 100 ? 5 : ys == '高档型' && mj <= 140 ? 6 : 8;
  },
  getDfjps(ys, hx) {//大房间空调匹数
    return ys == '高档型' && (hx == '三室一厅' || hx == '三室二厅') ? 2 : 1.5;
  },
  getXfjps(ys) {//小房间空调匹数
    return ys == '高档型' ? 1.5 : 1;
  },
  getLsps(hx) {//立式空调匹数
    return hx == '二室一厅' ? 2 : hx == '二室二厅' || hx == '三室一厅' ? 2.5 : 3;
  },
  getshi(str){
    var obj = {
      '一': 1,
      '二': 2,
      '三': 3,
      '四': 4,
      '五': 5,
      '六': 6,
      '七': 7,
    };
    return obj[str];
  },
  getDsjNum(ys, hx) {//电视机数量
    var obj = {
      '一': 1,
      '二': 2,
      '三': 3,
      '四': 4,
      '五': 5,
      '六': 6,
      '七': 7,
    };
    return ys == '高档型' ? (obj[hx[0]] + obj[hx[2]]) : obj[hx[2]];
  },
  getAirps(hx, zykt_ps, xfjgskt_ps, lskt_ps) {
    var obj = {
      '一': 1,
      '二': 2,
      '三': 3,
      '四': 4,
      '五': 5,
      '六': 6,
      '七': 7,
    };
    return obj[hx[0]] * xfjgskt_ps + zykt_ps + lskt_ps;
  },
  back(){
    wx.reLaunch({
      url: '/pages/index/index?display=none&target=index',
    })
  }
})