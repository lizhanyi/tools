export default class Platform{

  constructor(){
    /** 
     * 平台 代理信息
    */
    this.__proto__.UA = navigator.userAgent.toLowerCase();
  }
  /**
   * 移动设备判断
   */
  isMobile(){
    const regExp = new RegExp("(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)","i")
    return this.UA.match( regExp ) != null;
  }
  /**
   * pc 检测
   */
  isPc(){
    return !this.isMobile();
  }
  /** 
   * 微信
  */
  isWeiXin(){
    return this.UA.indexOf('micromessenger') !== -1;
  }
  /**
   * ios
   */
  isIos(){
    return !!this.UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
  /**
   * android
   */
  isAndroid(){
    return this.UA.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  }


  /**
   * 钉钉
   */
  isDingDing(){
    return this.UA.indexOf('dingding') !== -1;
  }
  /**
   * 获取 UA
   */
  get(){
    return this.UA;
  }
}