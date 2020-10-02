import { numRanks, currencyUnits, numMapToCh } from './constant';

export default class NumToZh_cn {

	constructor(){
		// 数字位，个、十、百、千、万...
		this.__proto__.numRanks = numRanks;
		// 货币单位 元、角、分、厘、毫 
		this.__proto__.currencyUnits = currencyUnits;
		// 阿拉伯数字 与 中文大写映射关系
		this.__proto__.numMapToCh = numMapToCh;
	}
	/**
	 * 核心方法，将数字转成汉子，并对数位级做处理(个位级、万位级、亿位级)
	 */
	_verify( arr, item, index ){
		const unit = this.numRanks[ arr.length - index - 1 ];
		return item === '0' ? /万|亿/.test( unit ) ? unit : '零' : this.numMapToCh[ item ] + unit;
	}
	/**
	 * 整数转换
	 */
	_dataIntHandle( integers ){
    
		if( integers.length > 17 ){
			console.warn( 'system is only support 17 digits, you can achieve more digits needs by extension' );
		}

		const currencyUnit = this.currencyUnits[0];

		return integers.map( ( item, index ) => this._verify( integers, item, index ) )
			.join('')
			.replace(/零+/g, '零' )
			.replace(/零$/,'') + currencyUnit;
	}

	/**
	 * 小数转换
	 */
	_dataDeciHandle( decimals ){

		if( decimals.length > 4 ){
			decimals = decimals.slice( 0, 4 );
			console.warn('system is only remained 4 decimal places, other will be ignored!')
		}

		const currencyUnits = this.currencyUnits.slice( 1 );

		return decimals.map( ( item, index ) => 
			item === '0' ? '' : this.numMapToCh[ item ] + currencyUnits[ index ] 
		).join('');

	}
	/**
	 * 转换方法， 传入待转换的数字
	 */
	toZh( numStr ){

		let char = ''; // 记录数字是否为负数
		
		numStr = ( '' + numStr ).trim(); 
		 
		if( !/^-?\d+(\.\d+)?$/.test( numStr ) ){
			throw 'param is not number string';
		}

		if( numStr < 0 ){
			numStr = numStr.substr(1);
			char = '负';
		}

		const [ integers='', decimals='' ] = numStr.split('.');

		return [ 
			char,
			this._dataIntHandle([ ...integers ]), 
			this._dataDeciHandle([ ...decimals ]), 
			'整' 
		].join('');
	}
}