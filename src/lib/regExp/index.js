/**
 **********************************正则表达式规则说明********************
 * 1. 前瞻 exp1(?=exp2) 查找 exp2 前面的 exp1
 * 2. 后顾： (?<=exp2)exp1 查找 exp2 后面的 exp1
 * 3. 负前瞻：exp1(?!exp2) 查找后面不是 exp2 的 exp1
 * 4. 负后顾：(?<!exp2)exp1 查找前面不是 exp2 的 exp1
 ************************************************************************/
import { class2type } from 'class2type';

export default class RegExp {
  /**
   * 
   * 手机号码
   */
  isPhoneNum( exp ){
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
  isZh( exp ){
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

    if( isNaN( numStr ) ) return numStr;

    const [ int, decimal ] = numStr.split( '.' );

    let ret = int.replace( reg, separator );

    if( decimal ){ 
      //  如果 num 存在 并且为数字， 保留 num 位小数， 否则处理小数部分
      ret = !class2type.isUndefined( num ) && !isNaN( num ) ? 
        ret + '.' + decimal.substring( 0, num ) : ret + '.' + decimal;
    }

    return ret;
  }
}

export const regExp = new RegExp();