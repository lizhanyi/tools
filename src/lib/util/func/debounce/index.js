/**
 * 功能： 防弹跳，爆点
 * 参数：fn 回调函数, wait, context 作用域 
 * 返回值：function
 */
export default function ( fn, wait, context ){
  let timer = null; 
  return function(){
    const args = arguments;
    context = context || this;
    clearInterval( timer );
    timer = setTimeout(function(){
      fn.apply( context, args );
      prev = Date.now();
    }, wait );
  }
}