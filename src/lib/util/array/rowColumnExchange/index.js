/**
 * 功能：将数组转换将二维数组 行列对换
 * 参数：无
 * 返回值：行列互换的结果，二维数组
 * eg:
 *  [ [ 1, 2, 3 ], [ 1, 2, 3 ] ] => [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ] ]
 */
import { isArray } from 'class2type';

export default function(){

    const ret = [];

    const firstEle = this[ 0 ];

    for( let i = 0; i < firstEle.length; i ++ ){

        const rows = [];

        this.forEach( item => {

            if( isArray( item ) ){
                rows.push( item[ i ] );
            }else{
                throw 'expected 2D array is wrong';
            }

        });

        ret.push( rows );
    }

    return ret;

} 