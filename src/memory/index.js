/** 
 * @param { key: 存储的键  }
 * @param { type: 存储类型 local => localStorage, session => sessionStorage  }
*/
export default class Memory{
    constructor( key, type ){
        this.key = key;
        this.type = type;
    }
    map = {
        'session': window.sessionStorage,
        'local': window.localStorage
    }
    setItem( value ){
        this.map[ this.type ].setItem( this.key, JSON.stringify( value ) );
    }
    getItem(){
        if( this.getKey() ){
            return JSON.parse( this.map[ this.type ].getItem( this.key ) );
        }
    }
    removeItem(){
        this.map[ this.type ].removeItem( this.key )
    }
    getKey(){
        return this.key in this.map[ this.type ];
    }

    static clear( type="local"){
        new this().map[ type ].clear()
    }

    // 删除 指定键值得数据
    static removeItems(){

    }
    
    // 获取 存储的 key 值
    static keys(){
        return {
            local: [],
            session: [],
        }
    }
}




