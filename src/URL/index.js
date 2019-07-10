/**
 * @param { cb: 每帧回调 }
 * @param { timeStamp: 每帧时间间隔 }
 */

export default class URL {
    handle( opt ){

        if( opt === '' ) return '';

        const opts = opt.substr(1).split('&');

        return opts.reduce( ( preTotal, el ) => {
            const [ key, value=''] = el.split('=');
            if( key === '' ) return {};
            return{
                ...preTotal,
                [ key ]: value
            }
        }, null )
    }
    static toJSON(){
        const { search, protocol, pathname, port, hash } = window.location;
        const inst = new this();
        return {
            search: inst.handle( decodeURIComponent( search ) ),
            hash: decodeURIComponent( hash ),
            uri: decodeURIComponent( protocol + hostname + port + pathname )
        }
    }
    static reset( opt ){
        const { search, uri, hash} = this.toJSON();
        return [ 
            uri,
            '?',
            Object.entries({ ...search, ...opt }).map(([key, value ])=> key + '=' + value ).join('&'),
            '#',
            hash
        ].join('');
    }
    static getParam( mid, onHash=false ){
        const regExp = new RegExp("(^|&)" + mid + "=([^&]*)(&|$)");
        const handle = opt => window.location[opt].substr(1).match( regExp );
        const r = handle( 'search' ) || ( onHash && handle( 'hash' ) ) || null;
        if ( r != null )  
            return decodeURIComponent( r[2] ); 
        return null;
    }
}
