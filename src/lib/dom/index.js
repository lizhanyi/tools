/**
 *
 * dom 节点操作类
 * 提供基本的 节点操作
 * 
 */
export default class Dom {

    /**
     * 功能：创建节点
     * 参数：tagName，标签名
     * 返回值：dom 节点
     * 
     */
    create( tagName ){
        return document.createElement( tagName );
    }

    
    after(){

    }


    before(){

    }

    /**
     * 功能： 插入节点
     * 参数： childNode， 子节点对象; parentNode，父节点对象， 默认值 document.body
     * 返回值： 无
     */
    appendChild( childNode, parentNode = document.body ){
        parentNode.appendChild( childNode );
    }



    index(){

    }


    /**
     * 功能：获取节点
     * 参数：selector, 选择器; context, 上下文
     * 返回值：返回 nodeList
     */
    getNode( selector, context = document  ){
        return context.querySelectorAll( selector );
    }


    clone(){

    }


    /**
     * 功能：删除节点
     * 参数：DOM
     * 返回值：删除后的 DOM
     * 
     */
    remove( child ){
        return child.parentNode.removeChild( child );
    }
    

    /**
     * 功能： 获取盒子的宽高
     * 参数：DOM 对象
     * 返回值：{ width, height }
     */
    getOffset( node ){
        const { offsetWidth, offsetHeight } = node;
        return {
            width: offsetWidth,
            height: offsetHeight
        }
    }
}

export const dom = new Dom();