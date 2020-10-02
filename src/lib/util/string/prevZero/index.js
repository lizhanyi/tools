/**
 * 功能：前导 0，请参照  padStart，padEnd 
 * 参数：数位长度
 * 返回值：补 0 的结果
 *
 */
// const prevZero = ( content, count = 2, pad = '0' ) => String( content ).padStart( count, pad );

export default function( count = 2 ){
  return this.padStart( count, '0' )
}; 



