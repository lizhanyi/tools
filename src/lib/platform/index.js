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

    isPc(){
        return !this.isMobile();
    }

    isWX(){

        return this.UA.indexOf('micromessenger') !== -1;
    }

    isIos(){

        return !!this.UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    }
    
    isAndroid(){
        
        return this.UA.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }

    isDD(){

    }
}