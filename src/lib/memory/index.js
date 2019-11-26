/** 
 * @param { key: 存储的键  }
 * @param { type: 存储类型 local => localStorage, session => sessionStorage  }
*/
import { class2type, func } from './../utils';

const { isUndefined, isArray } = class2type;

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

        /**
         * 存储类型 映射
         */
        this.__proto__.map = {
            'session': window.sessionStorage,
            'local': window.localStorage
        }

    }

    
    
    /**
     * 存储数据， value 数据
     */
    setItem( value, replacer ){
        this.map[ this.type ].setItem( this.key, func.filterFields( value, replacer ) );
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
     * 批量删除 存储数据， 自动遍历所有存储
     */
    static removeItems( keys=[] ){

        const storageTypes = Object.values( new this().map );

        keys = !isArray( keys ) ? keys.split(/\W+/g) : keys;

        keys.forEach( key => 
            storageTypes.forEach( item => item.removeItem( key ) ) 
        );
    }


    /**
     * 获取存储 与存储数据的 key 值
     */
    static keys(){
        return Object.entries( new this().map ).reduce( ( prevTotal, [ key, value ]) => 
            ({
                ...prevTotal,
                [ key ]: new Array( value.length ).fill( '' ).map( ( item, index ) => value.key( index ) )
            }), {}
        );
    }
}
