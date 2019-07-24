import { 
    NumToZh_cn,
    Memory,
    timeFrame,
    URL,
    Class2type,
    class2type,
    SuperDate,
} from './lib';

const USER_INFO = new Memory( 'userInfo', 'local' );
const TOKEN = new Memory( 'TOKEN', 'local' );
const TOKEN_S = new Memory( 'TOKEN', 'session' );
const TOKEN_S_S = new Memory( 'TOKEN_S_S', 'session' );

USER_INFO.setItem([{
    name: 'feitools-1',
    age: 18,
    sex: 'sex'
},{
    name: 'feitools-2',
    age: 18,
    sex: 'sex'
}], ['name' ]);

// TOKEN.setItem( Date.now() + 'local' );

// TOKEN_S.setItem( Date.now() + 's' );

// TOKEN_S_S.setItem( Date.now() + 's' );




// console.log( USER_INFO.getItem(), class2type.isNumber( TOKEN.getItem() ), TOKEN_S.getItem(), TOKEN_S.getKey() );  

// setTimeout( () => {
//     // Memory.clear('session')
//     console.log( Memory.keys(), 'keys' )
//     // USER_INFO.removeItem(); 
// }, 3000);

// Memory.

const superDate = new SuperDate('2015-2-30'); 
console.log( superDate.add(1, 'year' ) )






