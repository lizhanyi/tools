/**
 * 功能：将数组转换将二维数组 行列对换
 * 参数：无
 * 返回值：行列互换的结果，二维数组
 * eg:
 *  [ [ 1, 2, 3 ], [ 1, 2, 3 ] ] => [ [ 1, 1 ], [ 2, 2 ], [ 3, 3  ] ]
 */
import { isArray } from 'class2type';

export default function(){
  const ret = [];

  // 获取二位数组中最长的元素
  const maxLen = Math.max( ...this.map( item => {
    if( isArray( item )){
      return item.length 
    }
    throw 'expected 2D array is wrong';
  }));

  for( let i = 0; i < maxLen; i ++ ){
    const rows = [];
    this.forEach( item => {
      rows.push( item[ i ] );
    });
    ret.push( rows );
  }
  return ret;
} 