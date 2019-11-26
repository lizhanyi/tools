/** 
 * 功能： 数据拷贝
*/
import { isBoolean, isObject, isArray } from './../class2type';
import arrayExtend from './../array';

/**
 * 功能：将数据拷贝， 深拷贝
 * 参数：target， 目标对象; object， 被拷贝的对象数据
 * 返回值： 拷贝后的新对象
 */
export const deepCopy = ( target, object ) => {

    if( isObject( target ) && isObject( object ) ){
        throw 'paramter must be json, but got other type';
    }

    target = target || {};

    for( let key in object ){

        if( object.hasOwnProperty( key ) ){

            if( typeof object[ key ] === 'object' ){
                target[ key ] = isArray( object[ key ] ) ? [] : {};
                deepCopy( object[ key ], target[ key ] );
            }else{
                target[ key ] = object[ key ];
            }
        }
    }

    return target;

}

export default function( ...args ){


    if( isBoolean( args[0] ) && args[0] === true ){ // 深度拷贝

        let [ prev, rest ] = arrayExtend.group( args.slice(1).filter( item => isObject( item ) ), 1);

        rest.forEach( item => prev = deepCopy( prev[0], item ) );

    }else { // 浅拷贝
        
        const rest = args.filter( item => isObject( item ) );

        rest.length !== args.length && console.warn( 'Invalid data exists' );

        return args.reduce( ( prevTotal, item ) => ({ ...prevTotal, ...item }), {} );

    }
}