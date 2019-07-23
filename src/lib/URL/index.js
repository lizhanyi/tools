import { isObject } from '../class2type';

export default class URL {

    /**
     * 核心方法： 处理 URL 参数
     * 参数 opt: search 或 hash
     *
     */
    handle( opt ){

        if( opt === '' ) return '';

        const opts = opt.substr(1).split('&');

        return opts.reduce( ( preTotal, el ) => {

            const [ key, value='' ] = el.split( '=' );

            return key === '' ? {} : { ...preTotal,  [ key ]: value }

        }, null )
    }
    

    /**
     * 功能：将url 转换成 json 对象
     * 返回值： 返回 url 相关信息
     *
     */
    static toJSON(){

        const { search, protocol, hostname, pathname, port, hash } = window.location;

        const inst = new this();

        return {
            search: inst.handle( decodeURIComponent( search ) ),
            hash: decodeURIComponent( hash ),
            uri: decodeURIComponent( protocol + hostname + port + pathname )
        }
    }


    /**
     * 功能：重置 url
     * 参数：opt, json 对象, 返回 url
     */
    static set( opt ){

        if( !isObject( opt ) ){
            throw 'The method need a json data, but get a other type data'
        }

        const { search, uri, hash } = this.toJSON();

        return [ 
            uri,
            '?',
            Object.entries({ ...search, ...opt }).map( ([ key, value ]) => key + '=' + value ).join( '&' ),
            hash
        ].join('');
    }


    /**
     * 功能： 获取 url 参数
     * 参数： mid，参数; onHash，是否启用 hash, 默认不开启( 不建议开启 ) 
     * 返回值：参数值
     */
    static get( mid, onHash=false ){

        const regExp = new RegExp("(^|&)" + mid + "=([^&]*)(&|$)");

        const handle = opt => window.location[ opt ].substr(1).match( regExp );

        const r = handle( 'search' ) || ( onHash && handle( 'hash' ) ) || null;

        if ( r != null ) 
            return decodeURIComponent( r[2] ); 

        return null;

    }
}
