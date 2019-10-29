export default class RegExp {


    /**
     * 
     * 手机号码
     */
    isPhoneNumer( exp ){
        return /^1[0-9]{10}$/.test( exp );
    }


    /**
     * 
     * 身份证
     */
    isIdCard( exp ){
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test( exp );
    }


    /**
     * 
     * 邮箱
     */
    isEmail( exp ){
        return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test( exp );
    }


    // 中文
    isChinese( exp ){
        return /[\u4e00-\u9fa5]/.test( exp );
    }

}

export const regExp = new RegExp()