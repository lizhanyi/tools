/**
 * 功能：图片检查，含 base64 格式图片
 * 参数：exp， 指定数据
 * 返回值：boolean
 * 
 */
export default exp => /^data\:image|\.(png|jpe?g|gif)$/.test( exp );