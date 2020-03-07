/*** 
 * 功能：数组分组，仅支持分 2 组
 * 参数：array, 数组; condition, 分组规则，可以是数组，对象
 * 返回值：分组后的数据
*/
import { isNumber, getType } from 'class2type';

export default function( slice = 0 ){

    const copy = [ ...this ];

    if( !isNumber( +slice ) ){
        throw `Expected arguments 1 is number or array, but got a ${ getType( slice, true ) }`;
    }

    return [ copy.splice( 0, slice ),  copy ];


}

// export const group = function( array = [], condition ) {

//     const arrayCopy = [ ...array ];

//     if( !isArray( array ) ){

//         throw `Expected arguments 1 is array, but got a ${ getType( array, true ) }`;
//     }
    
//     if( !isNumber( +condition ) && !isArray( condition ) && !isObject( condition )  ){

//         throw `Expected arguments 2 is number or array, but got a ${ getType( condition, true ) }`;
//     }

//     // 如何是数字 直接分组处理
//     if( isNumber( condition ) ){
//         return [ arrayCopy.splice( 0, condition ),  arrayCopy ];
//     } 

//     throw `Method only supports 2 arguments and bunber split, later apply more supports.`;

// }