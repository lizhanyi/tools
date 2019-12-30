import Dom, { dom } from 'dom';
import Load, { load } from 'load';
import Memory from 'memory';

import NumToZh_cn from 'numToZh_cn';
import Platform from 'platform';
import RegExp, { regExp } from 'regExp';
import SuperDate from 'superDate';
import timeFrame from 'timeFrame';
import URL from 'URL';
import Class2type, { class2type } from 'class2type';

import * as tool  from 'util';

import Watermark from 'watermark';

export {
    Dom,
    dom,
    
    Load, // 静态 资源加载类
    load, // 实例

    Memory, // 数据本地存储
    NumToZh_cn, // 数字 转换 中文
    Platform, // 运行平台检测
    SuperDate, // 日历相关处理 

    RegExp, // 正则表达式
    regExp, // 正则表达式实例

    timeFrame, // 时间帧
    URL, // url 重置， 参数 获取

    Class2type, // 数据类型检测( 类 )
    class2type, // 数据类型检测( 实例 )

    tool, // 工具

    Watermark, // 生成水印
}