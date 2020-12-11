/**
 * 功能：检测是否为 http | https | ftp
 */
export default exp => /(^https?|ftp)\:\/\//.test( exp );