/**
 * 功能：补空位
 * 参数： content， 字符串；count，字符串长度； pad， 填充的内容
 * 返回值：字符串
 */
export const prevZero = ( content, count = 2, pad = '0' ) => String( content ).padStart( count, pad );