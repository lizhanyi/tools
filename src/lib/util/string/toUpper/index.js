/**
 * 功能：将首字母大写
 * 参数：slice, 是否割离 首字母，单独取出首字母
 * 返回值：首字母大写的字符串
 */

// export const toUpper = ( letter, slice = false ) =>{

//     let charAt0 = letter.charAt(0);
    
//     if( !/[a-zA-z]/.test( charAt0 ) ){
//         throw 'need a letter, but got a other char';
//     }

//     charAt0 = charAt0.toUpperCase();

//     return slice ? charAt0 : charAt0 + letter.substr(1);

//     // return letter.replace(/^([a-zA-z])([a-zA-z]+)$/, ( a, b, c ) => b.toUpperCase() + c )
// }

export default function( slice = false ){

    let charAt0 = this.charAt( 0 );

    // if( !/[a-zA-z]/.test( charAt0 ) ){
    //     throw 'expected a letter, but got a other char';
    // }

    charAt0 = charAt0.toUpperCase();

    return slice ? charAt0 : charAt0 + this.substr( 1 );
}
