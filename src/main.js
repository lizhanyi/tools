import { 
    NumToZh_cn,
    Memory,
    timeFrame,
    URL,
    Class2type,
    class2type,
    SuperDate,
    Platform,
    RegExp,
    regExp,
    load,
    tool
} from './lib';



/************************** tool **************************/
const json = {
    name: 'alibaba',
    sex: '男',
    age: '12',
    company: '集团',
    stree: '高教路',
    city: '杭州',
    country: '中国',
    province: '浙江'
}

const jsonstr = tool.filterFields( json, [ 'name', 'sex', 'country', 'city' ] );

console.log( 'jsonstr->',jsonstr, 'json->', json, '-------------> tool.filterFields' );

const parsejson = tool.pickUpFields( jsonstr, [ 'name', 'sex' ]);

console.log( 'parsejson->', parsejson, '-------------> tool.pickUpFields' );


// 2. format();
console.log( '--------- date ------------' );
const date = tool.formatDate( new Date( 2015, 10, 10 ));
console.log( date, 'date' );

/************************** tool **************************/



// Promise.all( load.css( '/src/static/css/index.css' ) ).then( res => {
//     console.log( res, 'res' );
// })

// load.fetch([ '/src/static/css/index.css', '/src/static/lib/index.js', '/src/static/img/41.png' ]).then( res => {
//     console.log( res, 'res' );
// })

// import { Platform, SuperDate, regExp } from 'feitools';
// console.log( Platform, SuperDate, regExp );



// const USER_INFO = new Memory( 'userInfo', 'local' );
// const TOKEN = new Memory( 'TOKEN', 'local' );
// const TOKEN_S = new Memory( 'TOKEN', 'session' );
// const TOKEN_S_S = new Memory( 'TOKEN_S_S', 'session' );

// USER_INFO.setItem([{
//     name: 'feitools-1',
//     age: 18,
//     sex: 'sex'
// },{
//     name: 'feitools-2',
//     age: 18,
//     sex: 'sex'
// }], ['name' ]);

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
// const str = '2015-2-1';
// const superDate = new SuperDate( str ); 
// console.log( JSON.stringify( superDate.afterDays(1, 'day' ).get() ) );
// console.log( superDate.result );
// console.log( superDate.afterMonths(10).get())



// platform.is








