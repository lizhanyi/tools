/**
 * 功能： 检测对象是否为空, 使用 Object.keys 执行效率低 
 * 参数：无
 * 返回值：boolean
 */

export default param => {

  for( var key in param ){
		if( param.hasOwnProperty( key ) ){
			return false
		}
  }
  
	return true
}

// export default () => Object.keys( param ).length === 0;