/**
 **********************************正则表达式规则说明********************
 * 1. 前瞻 exp1(?=exp2) 查找 exp2 前面的 exp1
 * 2. 后顾： (?<=exp2)exp1 查找 exp2 后面的 exp1
 * 3. 负前瞻：exp1(?!exp2) 查找后面不是 exp2 的 exp1
 * 4. 负后顾：(?<!exp2)exp1 查找前面不是 exp2 的 exp1
 ************************************************************************/
// 是安卓
import isAndroid from './isAndroid'
// 是钉钉
import isDingDing from './isDingDing'
// 是邮箱
import isEmail from './isEmail'
// 是协议开头 http 或 https 
import isHttp from './isHttp'
// 是身份证号
import isIDCardNumber from './isIdCardNumber'
// 是图片
import isImage from './isImage'
// 是 ios
import isIos from './isIos'
// 是 移动设备
import isMobile from './isMobile'
// 是 pc
import isPc from './isPc'
// 是手机号
import isPhoneNumber from './isPhoneNumber'
// 是微信
import isWeiXin from './isWeiXin'
// 是中文
import isZh from './isZh'



export {
  isAndroid,
  isDingDing,
  isHttp,
  isEmail,
  isIDCardNumber,
  isImage,
  isIos,
  isMobile,
  isPc,
  isPhoneNumber,
  isWeiXin,
  isZh,
}



