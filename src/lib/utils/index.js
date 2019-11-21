import { class2type, isArray, isObject, isDate, isNumber } from './class2type';
import { toString,  hasOwn, slice } from './vars';

export default class Tool{

    /**
     * 功能：首写字母大写
     */
    toUpper( letter, slice = false ){

        let charAt0 = letter.charAt(0);
        
        if( !/[a-zA-z]/.test( charAt0 ) ){
            throw 'need a letter, but got a other char';
        }

        charAt0 = charAt0.toUpperCase();

        return slice ? charAt0 : charAt0 + letter.substr(1);

        // return letter.replace(/^([a-zA-z])([a-zA-z]+)$/, ( a, b, c ) => b.toUpperCase() + c )
    }


    /**
     * 功能：补空位
     * 参数： content， 字符串；count，字符串长度； pad， 填充的内容
     * 返回值：字符串
     */
    prevZero( content, count = 2, pad = '0' ){
         
        return String( content ).padStart( count, pad );
    }


    /**
     * 功能：将json串 转换成 json 并 抽出 指定的 键值
     * 参数：str，json 字符串，fields，数组，元素为键
     * 返回值：处理后的字符串
     */
    pickUpFields( str, fields ){

        if( isArray( fields ) && fields.length > 0 ){
            
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
     * 参数：value：指定的数据对象， fields：指定的 key 数组
     * 返回值：转换后的字符串
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
     * 功能：formatDate 的中间函数， 协助处理数据
     * 参数：type, 数据类型， str， 字符串， 对应时间的值
     * 返回值：处理后的结果
     */
    _formatMiddleFunc( type, str, data ){

        const reg = {
            date: /^(Y+)(.?)(M{1,2})(.?)(D{1,2})(.)?$/,
            time: /^(h{1,2})(.+?)(m{1,2})(.+?)(s{1,2})(.)?$/
        }[ type ];

        const datas = str ? str.match( reg ).slice( 1 ) : [];

        return datas.map( (item = '', index) => index % 2 === 0 ? data[ index / 2 ].substr( -item.length ) : item );
    }


    /**
     * 功能：格式化数据，返回 json
     * 参数：date，日期对象
     * 返回值：包含日期信息信息的 数组 [ year, month, day, h, min, sec, misec ]
     */
    formatDate( date, format = "YYYY-MM-DD hh:mm:ss"){

        const { groupArray, _formatMiddleFunc } = this;

        const dateStr = format.split( /\s+/ );

        const types = [ 'date', 'time' ];

        if( !isDate( date ) ){
            throw 'paramter is not Date Object';
        }

        const dates = [ 
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

        return groupArray( dates, 3 ).map( ( item, index ) => 
            _formatMiddleFunc( 
                types[ index ], 
                dateStr[ index ], 
                item 
            ).join( '' ) 
        ).join( ' ' );
    }

    /**
     * 功能：检测数据是否为 falsy值， 数字 0 不处理
     */
     isFalsy( param ){
        return param === null || param === '' || param === undefined || param === false || param === 'null';
    }

    /*** 
     * 功能：数组分组，仅支持分 2 组
     * 参数：array, 数组; condition, 分组规则，可以是数组，对象
     * 返回值：分组后的数据
    */
    groupArray( array=[], condition ){

        const { getType } = class2type;

        const arrayCopy = [ ...array ];

        if( !isArray( array ) ){

            throw `Expected arguments 1 is array, but got a ${ getType( array, true ) }`;
        }
        
        if( !isNumber( +condition ) && !isArray( condition ) && !isObject( condition )  ){

            throw `Expected arguments 2 is number or array, but got a ${ getType( condition, true ) }`;
        }

        // 如何是数字 直接分组处理
        if( isNumber( condition ) ){
            return [ arrayCopy.splice( 0, condition ),  arrayCopy ];
        } 

        throw `Method only supports 2 arguments and bunber split, later apply more supports.`;

    }
    
}


export const tool = new Tool();

export {
    toString, // 
    hasOwn,
    slice,

    class2type,

}