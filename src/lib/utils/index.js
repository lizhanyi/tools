import { class2type } from './class2type';
import { toString,  hasOwn, slice } from './vars';

export default class Tool{

    /**
     * 功能：首写字母大写
     */
    toUpper( letter, slice ){

        let charAt0 = letter.charAt(0);
        
        if( !/[a-zA-z]/.test( charAt0 ) ){
            throw 'need a letter, but got a other char';
        }

        charAt0 = charAt0.toUpperCase();

        return slice !== undefined ? charAt0 : charAt0 + letter.substr(1);

        // return letter.replace(/^([a-zA-z])([a-zA-z]+)$/, ( a, b, c ) => b.toUpperCase() + c )
    }


    /**
     * 功能：补空位
     */
    prevZero( content, count = 2, pad = '0' ){
         
        return String( content ).padStart( count, pad );
    }


    /**
     * 功能：将json串 转换成 json 并 抽出 指定的 键值
     * 参数：str，json 字符串，fields，数组，元素为键
     */
    pickUpFields( str, fields ){

        if( Array.isArray( fields ) && fields.length > 0 ){
            
            return JSON.parse( str, ( key, value ) => key === '' ? value : fields.includes( key ) ? value : undefined );
        }

        return JSON.parse( str )

        // return Array.isArray( fields ) && fields.length > 0 ? 

        //     JSON.parse( str, ( key, value ) => key === '' ? value : fields.includes( key ) ? value : undefined ) 
        //     : 
        //     JSON.parse( str );
    }

    /**
     * 功能：指定数据 转换成 string 并只保留指定的 key 的数据
     * 参数：value：指定的数据对象， replacer：指定的 key 数组
     */
    filterFields( value, fields ){

        if( isArray( fields ) && fields.length > 0){ 

            if( isObject( value ) ){
                return JSON.stringify( value, fields  );
            }

            if( isArray( value ) && isObject( value[0] ) ){
                value = value.map( item  => fields.reduce( ( prevTotal, key ) => ({ ...prevTotal, [ key ]: item[ key ] }), {}) ); 
            }

            return JSON.stringify( value )

        }

        return JSON.stringify( value );
    }
    
    /**
     * 功能：将json串 转换成 json 并 抽出 指定的 键值
     */
    formatDate( date ){

        if( !class2type.isDate( date ) ){
            throw 'paramter is not Date Object';
        }
        
        return [ 
            'FullYear', 
            'Month', 
            'Date', 
            'Hours', 
            'Minutes', 
            'Seconds', 
            'Milliseconds'
        ].map( item => {
            const ret = date[`get${item}`]();
            return this.prevZero( item === 'Month' ? ret + 1 : ret );
        });
    }

    /**
     * 功能：检测数据是否为 falsy值， 数字 0 不处理
     */
     isFalsy( param ){
        return param === null || param === '' || param === undefined || param === false || param === 'null';
    }
}


export const tool = new Tool();

export {
    toString, // 
    hasOwn,
    slice,

    class2type,

}