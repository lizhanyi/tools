/**
 * 功能：打乱指定的数组
 * 参数： Array<object|string|number|any>
 */
import { isArray, getType } from 'class2type';

export default function(){

  if( !isArray( this ) ){
    throw `Expected an array, but got a ${ getType( this ) }`
  }

  let len = this.length;
  const that = [ ...this ];
  const ret = [];

  while( len-- ){
    const idx = Math.floor( Math.random() * that.length );
    ret.push( that.splice( idx, 1 )[0] )
  }
  return ret
} 