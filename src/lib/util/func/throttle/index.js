/**
 * 功能： 函数节流
 * 参数：fn 回调函数, wait, 节流频率, context, 作用域
 * 返回值：function
 */
export default function ( fn, wait, context ){
  let prev = Date.now();
  return function(){
    const args = arguments;
    const now = Date.now();
    if( now - prev >= wait ){
      fn.apply( context, args );
      prev = Date.now();
    }
  }
}