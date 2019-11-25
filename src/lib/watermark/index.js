/** 
 * 水印工具类
 * @dec 通过 canvass 实现 水印效果
*/


import { dom } from './../dom';

import defaultOpt from './conf'; // 默认配置项

export default class Watermark {

    constructor( options ){

        /** 
         * 合并配置项
        */
        this.options = { ...defaultOpt, ...options };

    }


    /**
     * 功能：获取文案边界范围
     * 参数：无
     * 返回值：无
     */
    getTextBorderline(){

        const { font, content, pad } = this.options;
        
        const span = dom.create( 'span' );

        span.innerHTML = content;

        Object.assign( span.style, {
            font,
            position: 'absolute',
            top: '-10000px',
            left: '-10000px',
            zIndex: -1,
        });

        dom.appendChild( span );

        let { width, height } = dom.getOffset( span );

        dom.remove( span );

        return {
            width: width + pad.width,
            height: height + pad.height
        }

    }


    /**
     * 功能：初始化，创建画布
     * 参数：无
     * 返回值：实例对象
     */
    init(){

        const canvas = dom.create( 'canvas' );

        Object.assign( canvas, { ...this.getTextBorderline() });

        canvas.style.display = 'none';

        dom.appendChild( canvas );

        this.canvas = canvas;

        return this;

    }


    /**
     * 功能：渲染画布
     * 参数：无
     * 返回值：
     */
    render(){
        
        const { options: { font, color, content, pad }, canvas } = this;
        const ctx = canvas.getContext( '2d' );
        ctx.save();
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.textBaseline = 'hanging';
        ctx.fillText( content, pad.width / 2,  pad.height / 2 + 5 );
        ctx.restore();
        return this;

    }


    /**
     * 功能：获取图片
     * 参数：needle, 是否直接获取图片， 默认不直接获取
     * 返回值：无
     */
    getImage( needle=false ){

        needle && this.init().render();

        const image = this.canvas.toDataURL( 'image/png' );

        dom.remove( this.canvas );

        return image;
    }


    /**
     * 功能：从新渲染画布
     * 参数： content, 内容
     * 返回值：实例对象
     */
    reRender( content="hello world" ){
        this.options = { ...this.options, content };
        this.init().render();
    }

}