/**
 * 功能： 检测是否为中文
 * 参数：
 */
export default exp => /[\u4e00-\u9fa5]/.test( exp );