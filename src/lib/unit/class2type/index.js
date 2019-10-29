
import { dataTypes } from './constant';
import { toString } from './../vars'

class Class2type{ 
    constructor(){
        /**
         * 数据类型集合
         */
        this.__proto__.dataTypes = dataTypes
    }
    

    /**
     * 获取数据类型
     */
    getType( opt ){
        return toString.call( opt ).replace(/^\[object\s+(.+)\]$/,'$1');
    }


    /**
     * 检测 json 是否为空
     */
    isEmptyObject( param ){
        return Object.keys( param ).length === 0;
    }
}

/**
 * 实例化 
 */
const class2type = new Class2type();

/**
 * 扩展原型方法
 */
class2type.dataTypes.forEach( item => {
    Object.assign( Class2type.prototype, {
        ['is'+ item ]( opt ){
            return class2type.getType( opt ) === item;
        }
    })
});


export default Class2type;

export { 
    class2type
};

export const { 
    isBoolean, 
    isNumber, 
    isString,
    isUndefined,
    isNull,
    isFunction,
    isArray,
    isDate,
    isRegExp,
    isObject,
    isError,
    isSymbol,
    isSet,
    isMap,
    isPromise,
} = class2type;