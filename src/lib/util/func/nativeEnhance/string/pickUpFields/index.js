/**
 * 功能：从字符串中 提取指定字段
 * 参数：fields, 数组，指定提取的字段键值，shift，字符串的使用 JSON.parse 后的类型， 布尔类型默认 {}, true [{},{}]
 * 返回值：提取后的结果
 */
import { isObject, isArray } from 'class2type';

export default function( fields = [], shift = false ){
  if( isArray( fields ) && fields.length > 0 ){
    return JSON.parse( this, ( key, value ) => {
      if( key === '' || fields.includes( key ) ) {
        return value;
      }else{
        if( !shift ){
          return undefined;
        }
        return isObject( value ) ? value : undefined;
      }
    })
  }
  return JSON.parse( this );
}