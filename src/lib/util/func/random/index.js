/**
 * 功能： 产生随机数
 * 参数：start[, end ], [ start, end ] 随机数范围, 如果仅传start, 返回结果， [ 0, start ]
 * 返回值：Number<Math.random>
 */
import { isUndefined, isNumber, getType } from 'class2type'

export default function ( start, end ){

  if( !isNumber( start ) || ( !isUndefined( end ) && !isNumber( end ) ) ){
    throw `expected params is a number type, but got an ${ getType( this ) }`;
  }

  if( isUndefined( end ) ){
    return Math.floor( Math.random() * start );
  }

  const diff = Math.floor( end - start );

  if( diff < 0 ){
    throw 'argument[0] must be greater than argument[1]';
  }

  return Math.floor( Math.random() * start ) + diff;
}