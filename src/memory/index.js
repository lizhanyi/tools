/** 
 * @param { key: 存储的键  }
 * @param { type: 存储类型 local => localStorage, session => sessionStorage  }
*/
export default class Memory{

    /**
     *Creates an instance of Memory.
     * @param { 存储的键 } key
     * @param { 存储类型 } type
     * @memberof Memory
     */
    constructor( key, type ){
        this.key = key;
        this.type = type;
        this._getIntance( type, key );
    }


    /**
     * 存储类型 映射
     */
    map = {
        'session': window.sessionStorage,
        'local': window.localStorage
    }

    
    /**
     * 存储数据， value 数据
     */
    setItem( value ){
        this.map[ this.type ].setItem( this.key, JSON.stringify( value ) );
    }


    /**
     * 获取 存储的值
     */
    getItem(){
        if( this.getKey() ){
            return JSON.parse( this.map[ this.type ].getItem( this.key ) );
        }
    }


    /**
     * 删除 单条 存储数据
     */
    removeItem(){
        this.map[ this.type ].removeItem( this.key )
    }


    /**
     * 检测 存储 是否存在 通过 key， 返回布尔值
     */
    getKey(){
        return this.key in this.map[ this.type ];
    }


    /**
     * 内部方法( 不建议调用 )
     * type: 存储类型， key: 数据的键 
     */
    _getIntance( type, key ){

        const { instances } = this.constructor;

        const values = instances[ type ] || [];

        if( values.length !== 0 && values.includes( key ) ){
            throw 'key is not only key, Memory need a only key, please check code'
        }

        this.constructor.instances = { 
            ...instances,
            [ type ]: [ ...values, key ]
        };
    }

    
    /**
     * 存储实例, 获取
     */
    static instances = {}


    /**
     * 清除空指定类型的数据
     */
    static clear( type="local"){
        new this().map[ type ].clear()
    }


    /**
     * 批量删除 存储数据
     */
    static removeItems( keys=[] ){
        (
            !Array.isArray( keys ) ? keys.split(',') : keys 
        ).forEach( item => {
            Object.values( new this().map ).removeItem( item )
        });
    }


    /**
     * 获取存储 与存储数据的 key 值
     */
    static keys(){
        return Object.entries( new this().map ).map( ([ key, value ]) => ({ 
                [ key ]: new Array( value.length ).fill('').map( (item, index ) => value.key(index) )   
            })
        );
    }
}




