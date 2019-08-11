
const toString = Object.prototype.toString;

const hasOwn = Object.prototype.hasOwnProperty;


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

}


export const tool = new Tool();

export {
    toString, // 
    hasOwn,
}