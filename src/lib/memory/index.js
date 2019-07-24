/** 
 * @param { key: 存储的键  }
 * @param { type: 存储类型 local => localStorage, session => sessionStorage  }
*/
import { isUndefined, isArray, isObject } from '../class2type';

export default class Memory{

    /**
     *Creates an instance of Memory.
     *
     * @param { 存储的键 } key
     * @param { 存储类型 } type
     */
    constructor( key, type ){

        this.key = key;

        this.type = type;

        this._getIntance( type, key, this );

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
    setItem( value, replacer ){

        const data = this._filterFields( value, replacer );

        this.map[ this.type ].setItem( this.key, data );
    }


    /**
     * 获取 存储的值
     */
    getItem(){
        return this.getKey() && JSON.parse( this.map[ this.type ].getItem( this.key ) );
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
     * 过滤字段， replacer 仅支持 数组
     */
    _filterFields( value, replacer ){

        let ret = value;

        if( isArray( replacer ) ){

            if( isObject( value ) ){
                return JSON.stringify( ret, replacer  );
            }

            if( isArray( value ) && isObject( value[0] ) ){
                return JSON.stringify( ret.map( ( item ) => JSON.parse( JSON.stringify( item, replacer ) )) );
            }

        }

        return JSON.stringify( ret );
    }


    /**
     * 检测 key 值 合法性
     */
    _checkKey( key ){

        const hasSpace = /\s+/.test( key );

        const hasSpecialChar = /\W+/.test( key );

        if(  hasSpecialChar ||  hasSpace ){
            throw 'key must be a /w+/ and not space';
        }
    }


    /**
     * 存储实例对象， 内部方法( 不建议调用 )
     * type: 存储类型， key: 数据的键 
     */
    _getIntance( type, key, that ){

        if( that.constructor !== Memory ){
            throw 'not allowed, this is a internal method!'
        }

        this._checkKey( key );

        // 静态方法初始化时，会自动执行， 增加判断处理
        if( isUndefined( type ) ) return;

        const { instances } = this.constructor;

        const values = instances[ type ] || [];

        if( values.length !== 0 && values.includes( key ) ){
            throw ` Memory need a only key, the ${key} is existed, please check code!`
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
        new this().map[ type ].clear();
    }


    /**
     * 清空所有数据
     */
    static clearAll(){
        this.clear('local');
        this.clear('session');
    }


    /**
     * 批量删除 存储数据， 自动遍历所有存储, 返回剩余存储
     */
    static removeItems( keys=[] ){

        ( 
            !Array.isArray( keys ) ? keys.split(/\W+/g) : keys 
        ).forEach( key => {
           Object.values( new this().map ).forEach( item => {
                item.removeItem( key );
           })
        })
    }


    /**
     * 获取存储 与存储数据的 key 值
     */
    static keys(){
        return Object.entries( new this().map ).reduce( ( prev, [ key, value ]) => ({
            ...prev,
            [ key ]: new Array( value.length ).fill( '' ).map( ( item, index ) => value.key( index ) )
        }), {});
    }
}