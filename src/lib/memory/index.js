/** 
 * 功能： 封装 本地存储( 永久存储和会话存储 )， 用于统一管理 应用的 数据存储
 *      html5 相关的操作均可以使用 实例操作， 建议所有的实例使用 大写
 * 参数： 类接受 存储的 key 和 存储类型( session, local )
*/
import { class2type, func } from 'util';
const { isUndefined, isArray } = class2type;

export default class Memory{

	constructor( key, type ){
		this.key = key;
		this.type = type;
		this._getIntance( type, key, this );
		// 存储类型 映射
		this.__proto__.map = {
			'session': window.sessionStorage,
			'local': window.localStorage
		}
  } 

  // 存储实例
  static instances = {}

	/**
	 * 功能： 存储数据
   * 参数： value<any>, replacer[]
	 */
	setItem( value, replacer ){
		this.map[ this.type ].setItem( this.key, func.filterFields( value, replacer ) );
  }
  
	/**
	 * 功能： 获取 存储的值
   * 参数： 无
   * 返回值： 存储的数据
	 */
  getItem(){
    return this.hasKey() && JSON.parse( this.map[ this.type ].getItem( this.key ) )
  }

	/**
	 * 功能： 删除储存
	 */
	removeItem(){
		this.map[ this.type ].removeItem( this.key )
  }
  
	/**
	 * 功能： 检测 存储 是否存在 通过 key
   * 参数： 无
   * 返回值： boolean
	 */
	hasKey() {
    return this.key in this.map[ this.type ];
  }

	/**
	 * 功能：清空指定 type 存储数据
   * 参数：type，存储类型
	 */
	static clear( type="local"){
		new this().map[ type ].clear();
  }
  
	/**
	 * 功能：清空所有存储数据( 包括 local 和 session )
	 */
	static clearAll(){
		this.clear( 'local' );
		this.clear( 'session' );
  }
  
	/**
	 * 功能：批量删除 存储数据， 自动遍历所有存储
   * 参数：keys, Array<key> | String
	 */
	static removeItems( keys=[] ){
		const storageTypes = Object.values( new this().map );
		keys = !isArray( keys ) ? keys.split(/\W+/g) : keys;
		keys.forEach( key => 
			storageTypes.forEach( item => item.removeItem( key ) ) 
		);
  }
  
	/**
	 * 功能：获取存储 与存储数据的 key 值
   * 返回值：Object<{[type]:Array<Object>}>
	 */
	static keys(){
		return Object.entries( new this().map ).reduce( ( prevTotal, [ key, value ]) => 
			({
				...prevTotal,
				[ key ]: new Array( value.length ).fill( '' ).map( ( item, index ) => value.key( index ) )
			}), {}
		);
  }

  /**
	 * 功能：存储实例对象， 内部方法( 不建议调用 )
	 * type: 存储类型， key: 数据的键 
	 */
	_getIntance( type, key, that ){

		if( that.constructor !== Memory ){
			throw 'not allowed, this is a internal method!'
    }
    
		// this._checkKey( key );

		// 静态方法初始化时，会自动执行， 增加判断处理
		if( isUndefined( type ) ) return;

		const { instances } = this.constructor;
		const values = instances[ type ] || [];

		if( values.length !== 0 && values.includes( key ) ){
			throw `Memory need a only key, the ${key} is existed, please check code!`
		}

		this.constructor.instances = {  // 保存实例
			...instances,
			[ type ]: [ ...values, key ]
    }
    
	} 
  
  /**
	 * 检测 key 值 合法性
	 */
	_checkKey( key ){
		const hasSpace = /\s+/.test( key )
		const hasSpecialChar = /\W+/.test( key )
		if(  hasSpecialChar ||  hasSpace ){
			throw 'key must be a /w+/ and not space';
		}
	}
}
