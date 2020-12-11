/** 
 * 说明： 为了提高性能， 很多情况下采用了 for 循环实现遍历， 经过测试 for 循环遍历 性能高于 map forEach reduce 等
*/
import { isArray, isObject, isDate } from 'class2type';

import './nativeEnhance';

// 获取 ua
import getUa from './getUa';

// 检测是否为空对象
import isEmptyObject from './isEmptyObject';

// 防弹跳
import debounce from './debounce';

// 节流
import throttle from './throttle';

// 使用分隔符 分割代码
import splitNum from './splitNum';

// 时间帧
import timeFrame from './timeFrame';

export {
  getUa, 
  isEmptyObject,
  debounce, 
  throttle,
  splitNum,
  timeFrame,
}






export default class Func {
  /**
   * 功能：检测数据是否为 falsy值， 数字 0 不处理
   */
  isFalsy( param ){
    return param === null || param === '' || param === undefined || param === false || param === 'null';
  }
  /**
   * 功能：指定数据 转换成 string 并只保留指定的 key 的数据
   * 参数：value：指定的数据对象， fields：指定的 key 数组
   * 返回值：转换后的字符串
   */
  filterFields( value, fields ){
    if( isArray( fields ) && fields.length > 0){ 
      if( isObject( value ) ){
        return JSON.stringify( value, fields  );
      }
      if( isArray( value ) && isObject( value[0] ) ){
        value = value.map( item  => fields.reduce( ( prevTotal, key ) => ({ ...prevTotal, [ key ]: item[ key ] }), {}) ); 
      }
      return JSON.stringify( value )
    }
    return JSON.stringify( value );
  }
  /**
   * 功能：formatDate 的中间函数， 协助处理数据
   * 参数：type, 数据类型， str， 字符串， 对应时间的值
   * 返回值：处理后的结果
   */
  _formatMiddleFunc( type, str, data ){
    const reg = {
      date: /^(Y+)(.?)(M{1,2})(.?)(D{1,2})(.)?$/,
      time: /^(h{1,2})(.+?)(m{1,2})(.+?)(s{1,2})(.)?$/
    }[ type ];
    const datas = str ? str.match( reg ).slice( 1 ) : [];
    return datas.map( (item = '', index) => index % 2 === 0 ? data[ index / 2 ].substr( -item.length ) : item );
  }
  /**
   * 功能：格式化数据，返回 json
   * 参数：date，日期对象
   * 返回值：包含日期信息信息的 数组 [ year, month, day, h, min, sec, misec ]
   */
  formatDate( date, format = "YYYY-MM-DD hh:mm:ss"){
    const dateStr = format.split( /\s+/ );
    const types = [ 'date', 'time' ];
    if( !isDate( date ) ){
      throw 'paramter is not Date Object';
    }    
    const dates = [ 
      'FullYear', 
      'Month', 
      'Date', 
      'Hours', 
      'Minutes', 
      'Seconds', 
      'Milliseconds'
    ].map( item => {
      const ret = date[`get${ item }`]();
      return String( item === 'Month' ? ret + 1 : ret ).prevZero();
    });
    return dates.group( 3 ).map( ( item, index ) => 
      this._formatMiddleFunc( 
        types[ index ], 
        dateStr[ index ], 
        item 
      ).join( '' ) 
    ).join( ' ' );
  }
}


export const func = new Func();
