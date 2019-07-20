/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */
import './animationFrame';

export default function( cb = ()=>{}, timeStamp ){

    /**
     * 起始时间
     */
    let origin = Date.now();


    /**
     * 上一次时间
     */
    let prev = origin;


    /**
     * 下一次时间
     */
    let cur = 0;


    /**
     * 核心函数 
     */
    let timer = requestAnimationFrame(function(){
        cur = Date.now();
        if( cur - prev > timeStamp ){
            cb( prev, cur, origin ); 
            prev = cur;
        }
        timer && cancelAnimationFrame( timer );
        timer = requestAnimationFrame( arguments.callee );
    });
}