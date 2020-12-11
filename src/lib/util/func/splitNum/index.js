/**
   *
   * 功能：分割数据
   * 参数：numStr, 数字串; count, 每组数字长度; num, 保存的小数位 可以不传
   * 返回值：分割后的字符串
   */
  export default function( numStr, count = 3, separator = ',', num ){

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