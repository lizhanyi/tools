/**
 * 记录所有的 正则表达式
 *
 */
export default class RegExp {


    /**
     * 
     * 手机号码
     */
    isPhoneNumber( exp ){
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


    /**
     *
     * 中文
     */
    isChinese( exp ){
        return /[\u4e00-\u9fa5]/.test( exp );
    }


    /**
     *
     * 功能：分割数据
     * 参数：numStr, 数字串; count, 每组数字长度; num, 保存的小数位 可以不传
     * 返回值：分割后的字符串
     */
    splitNum( numStr, count = 3, separator = ',', num ){

        const reg = new RegExp( `(?=(?!(\b))(\d{${count}})+$)`, 'g' );

        if( isNaN( numStr ) ){
            return numStr;
        }

        const [ int, decimal ] = numStr.split( '.' );

        if( !decimal && !num ){
            return numStr.replace( reg, separator );
        }




        return 
    }

    


}

export const regExp = new RegExp()