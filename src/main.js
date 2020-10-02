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
	tool,
	Watermark,
} from './lib';


console.log( URL.set({ name: 'name', sex: 'sex' }) );

/************************** SuperDate **************************/
	const superDate = new SuperDate( '2019-12-21' );
	// console.log( superDate, 'date' );

	console.log( superDate.before(1).get() )




/***************************************************************/



/************************** NumToZh_cn **************************/

	const TOKEN = new Memory( 'TOKEN', 'local' );

	TOKEN.setItem({
			name: 'name',
			key: 'key',
			sex: 'sex'
	}, [ 'sex' ] );

	console.log( TOKEN.getItem() );

	console.log( TOKEN );


/************************** tool **************************/
	console.log( '------------ tool ------------------' );
// 1. filterFields,  pickUpFields    
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

	const jsonstr = tool.func.filterFields( json, [ 'name', 'sex', 'country', 'city' ] );

	console.log( jsonstr,  json );

	// const parsejson = tool.func.pickUpFields( jsonstr, [ 'name', 'sex' ]);

	// console.log( parsejson );


// 2. format();
// console.log( '--------- date ------------' );
	const date = tool.func.formatDate( new Date( 2015, 10, 10 ));
// console.log( date, 'date' );

// 3. groupArray()
	const arrs =  [ 'q', 'w', 'e', 'r', 't' ].group( 3 );

	console.log( arrs, 'group' ); // [ [ 'q', 'w', 'e' ], [ 'r', 't' ] ]




/************************** tool **************************/


/************************** load 模块测试  **************************/


	console.log( '------------ load ------------------' );

	// 1. load.css
	Promise.all( load.css( '/src/static/css/index.css' ) ).then( res => {
		// console.log( res, 'res' );
	});

	// 2. load.fetch
	load.fetch([ '/src/static/css/index.css', '/src/static/lib/index.js', '/src/static/img/41.png' ]).then( res => {
		// console.log( res, 'res' );
	});

/************************** load 模块测试  **************************/


/************************** watermark 模块测试  **************************/

const watermark = new Watermark({
	pad: {
		width: 100,
		height: 50
	}
});
const url =  watermark.init().render().getImage();

const image = new Image();

image.src = url;

document.body.appendChild( image );










