

import { dataTypes, toString } from '../global';
export default class Class2type{ 
    getType( opt ){
        return toString.call( opt ).replace(/^\[object\s+(.+)\]$/,"$1").toLowerCase();
    }
    isEmptyObject( param ){
        return Object.keys( param ).length === 0;
    }
}
dataTypes.forEach( item => {
    Object.assign( Class2type.prototype, {
        ['is'+ item ]( opt ){
            return toString.call( opt  ).replace(/^\[object\s+(.+)\]$/,"$1") === item;
        }
    })
});


