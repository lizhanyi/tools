window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 6000 / 60);
    }
})();
window.cancelAnimationFrame = (function(){
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function( id ){
        window.clearTimout( id );
    }
})(); 



