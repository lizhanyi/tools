import Memory from './memory';
import NumToZh_cn from './numToZh_cn';
import timeFrame from './timeFrame';
import URL from './URL';
import Class2type, { class2type } from './utils/class2type';
import SuperDate from './superDate';
import Platform from './platform';
import RegExp, { regExp } from './regExp';

import Load, { load } from './load';

import Tool, { tool } from './utils';

import Watermark from './watermark';

export {
    Memory, // 数据本地存储
    NumToZh_cn, // 数字 转换 中文
    timeFrame, // 时间帧
    URL, // url 重置， 参数 获取
    Class2type, // 数据类型检测( 类 )
    class2type, // 数据类型检测( 实例 )
    SuperDate, // 日历相关处理 
    Platform, // 运行平台检测

    RegExp, // 正则表达式
    regExp, // 正则表达式实例

    Load, // 静态 资源加载类
    load, // 实例

    Tool, // 工具类
    tool, // 实例

    Watermark, // 生成水印
}