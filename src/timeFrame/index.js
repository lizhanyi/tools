/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */
import './animationFrame';
export default function( cb = ()=>{}, timeStamp ){
    let prev = Date.now();
    let origin = prev; // 起始时间
    let cur = 0;
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