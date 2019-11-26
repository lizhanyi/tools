 /**
 * 功能：首写字母大写
 */
export const toUpper = ( letter, slice = false ) =>{

    let charAt0 = letter.charAt(0);
    
    if( !/[a-zA-z]/.test( charAt0 ) ){
        throw 'need a letter, but got a other char';
    }

    charAt0 = charAt0.toUpperCase();

    return slice ? charAt0 : charAt0 + letter.substr(1);

    // return letter.replace(/^([a-zA-z])([a-zA-z]+)$/, ( a, b, c ) => b.toUpperCase() + c )
}