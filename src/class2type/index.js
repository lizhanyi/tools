
import { toString } from './../unit';
import { dataTypes } from './constant';

class Class2type{ 
    getType( opt ){
        return toString.call( opt ).replace(/^\[object\s+(.+)\]$/,"$1");
    }
    isEmptyObject( param ){
        return Object.keys( param ).length === 0;
    }
}

dataTypes.forEach( item => {
    Object.assign( Class2type.prototype, {
        ['is'+ item ]( opt ){
            return ( new Class2type() ).getType( opt ) === item;
        }
    })
});

export default Class2type;


