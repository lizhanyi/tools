
/**
 * 功能： 加载静态资源, 提供 css 和 js 加载
 * @createElement ：创建节点
 * @appendChild ： 插入节点
 * @getNode : 获取节点
 * @getType ： 获取数据类型
 * @css ： 加载 css 
 * @script : 加载 js
 * @fetch : 资源加载函数
 * 
 */


export default class Load {

    constructor(){

        // 保存 head 节点
        this.headNode = null;

        // link 节点 属性配置
        this.linkConfig = {
            'charset': 'utf-8',
            'rel': 'styleshee',
            'type': 'text/css'
        }
    }


    /**
     * 功能： 新建节点
     * 参数：tagName
     */
    createElement( tagName ) {
        return document.createElement( tagName );
    }


    /**
     * 功能： 插入节点
     * 参数： childNode， 子节点对象， parentNode，父节点对象， 默认值 document
     * 返回值： 无
     */
    appendChild( childNode, parentNode = document ){
        parentNode.appendChild( childNode );
    }


    /**
     * 功能： 删除节点
     * 参数： childNode， 子节点对象， parentNode，父节点对象， 默认值 document
     * 返回值： 删除后的节点
     */
    removeChild( childNode ) {
        return childNode.parentNode.removeChild( childNode );
    }   


    /**
     * 功能： 获取指定节点
     * 参数： selector， css 选择器， context， 作用域( 注意节点类型 )， 默认 document
     * 返回值： DOM 对象
     */
    getNode( selector, context = document.body ) {
        return context.querySelectorAll( selector );
    }


    /**
     * 功能： 获取数据类型
     * 参数：数据 对象
     * 返回值：数据类型 字符串
     */
    getType( param ) {
        return Object.prototype.toString.call( param ).replace(/^\[object\s+(.+)\]$/,'$1').toLowerCase();
    }


    /**
     * 功能： 动态加载 css 逻辑处理
     * 参数：url，
     * 返回值： promise 对象
     */
    css( url ) {

        const { createElement, appendChild, linkConfig, getNode, headNode } = this;
        const linkNode  = createElement( 'link' );
        const p = new Promise( resolve => linkNode.onload = () => resolve( url ) );

        Object.entries( linkConfig ).forEach( ([ key, value ]) => linkNode[ key ] = value );

        linkNode.href = url;

        this.headNode = headNode || getNode( 'head' )[0];
        appendChild( linkNode,  this.headNode );

        return p;
    }


    /**
     * 功能： 动态加载 javascript
     * 参数： url
     * 返回值： promise 对象
     */
    script( url ) {

        const { createElement, appendChild, getNode, headNode } = this;
        const scriptNode = createElement( 'script' );
        const p = new Promise( ( resolve, reject ) => {

            if( scriptNode.readyState ){
                scriptNode.onreadystatechange = () => ( scriptNode.readyState === 'loaded' || scriptNode.readyState === 'complete' ) ? resolve( url ) : reject( url );
            }else{
                scriptNode.onload = () => resolve( url );
            }

        });

        scriptNode.src = url;
        this.headNode = headNode || getNode( 'head' )[0];
        appendChild( scriptNode,  this.headNode );

        return p;
    }


    /**
     * 功能： 图片加载
     * 参数： url
     * 返回值： promise 对象
     */
    image( url ) {

        const img = new Image();
        const p = new Promise( ( resolve, reject ) => {
            img.onload = () => resolve( url );
            img.onerror = () => reject( url );
        });

        img.src = url;

        return p;
    }


    /**
     * 功能： 拉取静态资源 入口函数
     * 参数：param, 
     */
    fetch( param ) {

        const { getType, css, script, image  } = this;

        let defer = null; // 保存 promise

        switch( getType( param ) ){
            case 'array': break;
            case 'string': param = param.trim().split( /\s*,\s*/ ); break;
            default: param = [];
        }

        if( param.length === 0 ){
            throw `paramter is only string or array`;
        }

        const defers = param.reduce( (prevTotal, item ) => {

            const ret = item.match( /\.(js|css|png|gif|jpe?g)$/ ); 
            

            if( ret !== null && ret.length !== 0 ){

                switch( ret.slice( -1 )[ 0 ] ){
                    case 'js': defer = script( item ); break;
                    case 'css': defer = css( item ); break;
                    default: defer = image( item );
                }

                return [ ...prevTotal, defer  ];

            }
            
            return prevTotal;

        }, []);

        return Promise.all([ ...defers ]);
    }
}


export const load = new Load();


