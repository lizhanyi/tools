
/**
 * 功能： 加载静态资源, 提供 css 和 js 加载
 * @des 动态加载静态资源，不能包含 commom.js 或 es6 
 * @createElement ：创建节点
 * @appendChild ： 插入节点
 * @getNode : 获取节点
 * @css ： 加载 css 
 * @script : 加载 js
 * @fetch : 资源加载函数
 * 
 */

import { isString, isArray } from 'class2type';
import { dom } from 'dom';

const { create, appendChild, getNode } = dom;

export default class Load {

	constructor(){

		// 保存 head 节点
		this._headNode = null
		// link 节点 属性配置
		this.__proto__.linkConfig = {
			'charset': 'utf-8',
			'rel': 'stylesheet',
			'type': 'text/css'
		}
		// 字段和方法相关映射
		this.__proto__.map = {
			'js': 'script',
			'css': 'css',
			'png': 'image',
			'jpg': 'image',
			'gif': 'image',
			'jpeg': 'image'
		}
  }
  
	/**
	 * 功能： 动态加载 css 逻辑处理
	 * 参数： urls, 数组或以逗号隔开的字符串
	 * 返回值： promise 对象
	 */
	css( urls ) {
    const promises = []; 
    this._headNode = this._headNode || getNode( 'head' )[0]
    this.handleParam( urls ).forEach( url => {
      if( /(\.css)$/.test( url ) ){
        const linkNode  = create( 'link' );
        const p = new Promise( resolve => linkNode.onload = () => resolve( url ) )
        Object.entries( this.linkConfig ).forEach( ([ key, value ]) => linkNode[ key ] = value )
        linkNode.href = url
        appendChild( linkNode,  this._headNode )
        promises.push( p );
      }
    })
    return promises
  }
  
	/**
	 * 功能： 动态加载 javascript
	 * 参数： urls, 数组或以逗号隔开的字符串
	 * 返回值： promise 对象
	 */
	script( urls ) {
    const promises = [];
    this._headNode = this._headNode || getNode( 'head' )[0]
    this.handleParam( urls ).forEach( url => {
      if( /(\.js)$/.test( url ) ){
        const scriptNode = create( 'script' );
        const p = new Promise( ( resolve, reject ) => {
          if( scriptNode.readyState ){
            scriptNode.onreadystatechange = () => 
              ( scriptNode.readyState === 'loaded' || scriptNode.readyState === 'complete' ) ? resolve( url ) : reject( url );
          }else{
            scriptNode.onload = () => resolve( url );
          }
        })
        scriptNode.src = url
        appendChild( scriptNode,  this._headNode )
        promises.push( p );
      }
      return promises;
    })
  }
  
	/**
	 * 功能： 图片加载
	 * 参数： urls,  source, 调用干函数的源头 
	 * 返回值： promise 对象
	 */
	image( urls ) {
    const promises = [];
    this.handleParam( urls ).forEach( url => {
      if( /\.(png|gif|jpe?g)$/.test( url ) ){
        const img = new Image();
        const p = new Promise( ( resolve, reject ) => {
          img.onload = () => resolve( url )
          img.onerror = () => reject( url )
        })
        img.src = url
        promises.push( p );
      }
    })
    return promises;
  }
  
	/**
	 * 功能：处理参数
	 * 参数：param, 传入的 url 参数
	 * 返回值：处理后的结果，数组类型
	 *
	 */
	handleParam( param ){
		return isString( param ) ? param.trim().split( /\s*,\s*/ ) : isArray( param ) ? param : []; 
  }
  
	/**
	 * 功能： 拉取静态资源 入口函数
	 * 参数：param, 数组或字符串
	 */
	fetch( param ) {
		param = this.handleParam( param )
		if( param.length === 0 ){
      throw `paramter is only string or array`;
		}
		const defers = param.reduce( ( prevTotal, item ) => {
			const ret = item.match( /\.(js|css|png|gif|jpe?g)$/ ); 
			if( ret !== null && ret.length !== 0 ){
				return [ 
					...prevTotal, 
					...this[ this.map[ ret.pop() ] ]( item ) 
				]
			}
			return prevTotal
		}, []);
		return Promise.all([ ...defers ]);
	}
}

export const load = new Load();


