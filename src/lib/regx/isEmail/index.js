/**
 * 功能：检测是否为邮箱
 */
export default exp =>  /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test( exp )