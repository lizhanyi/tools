import { NUMBER_RANKS, CURRENCY_UNITS, NUMBER_TO_ZH1, NUMBER_TO_ZH2 } from './constant';
import { isUndefined, isBoolean } from 'class2type';
/**
 * 功能： 将数字转成 金额读取
 * 参数：onlyTransformNumber， 仅转换数字，安中文读取， 默认按金额读取
 */
export default class NumToZh {
	constructor( onlyTransformNumber=false ){
    this.onlyTransformNumber = onlyTransformNumber;
    this.__proto__.numberToZh = onlyTransformNumber ? NUMBER_TO_ZH1 : NUMBER_TO_ZH2;
  } 

	/**
	 * 功能：整数转换
   * 参数：Array<string|number>
   * 返回值：读取后的字符串
	 */
	_dataIntHandle( integers ){
		if( integers.length > 17 ){
			console.warn( 'system is only support 17 digits, you can achieve more digits needs by extension' );
		}
		return integers.map( ( item, index ) => {
      const unit = NUMBER_RANKS[ integers.length - index - 1 ];
      return item === '0' ? /万|亿/.test( unit ) ? unit : '零' : this.numberToZh[ item ] + unit;
    }).join('').replace(/零+/g, '零' ).replace(/零$/,'');
  }
  
	/**
	 * 功能： 小数转换
   * 参数： Array<string|number>
   * 返回值：读取后的字符串
	 */
	_dataDeciHandle( decimals ){
    const prefix = '点';
    if( this.onlyTransformNumber ) { // 仅转换成中文汉字
      return prefix + decimals.map( item => this.numberToZh[ item ] )
    }

    if( decimals.length > 4 ){
      decimals = decimals.slice( 0, 4 );
      console.info('system is only remained 4 decimal places, other will be ignored!')
    }

    const currencyUnits = CURRENCY_UNITS.slice( 1 );

    return decimals.map( 
      ( item, index ) => item === '0' ? '' : this.numberToZh[ item ] + currencyUnits[ index ] 
    ).join('');

  }
  
	/**
	 * 功能：转换方法， 传入待转换的数字
   * 参数：numStr，转换数据，onlyTransformNumber，转换类型， 是否为数字( 默认不是，是金额数字 ) 
   * 返回值， string, 读取的结果
	 */
	toZh( numStr, onlyTransformNumber ){

    if( isBoolean( onlyTransformNumber ) ){ // 覆盖 constructor 中的值 
      this.onlyTransformNumber = onlyTransformNumber;
      this.numberToZh = onlyTransformNumber ? NUMBER_TO_ZH1 : NUMBER_TO_ZH2;
    }

		let char = ''; // 记录数字是否为负数
		
		numStr = ( '' + numStr ).trim(); 
		 
		if( !/^-?\d+(\.\d+)?$/.test( numStr ) ){
			throw 'param is not number string';
		}

		if( numStr < 0 ){
			numStr = numStr.substr(1);
			char = '负';
    }

    const suffix = this.onlyTransformNumber ? '' : '整';

    let [ integers='', decimals='' ] = numStr.split( '.' );

    integers = this._dataIntHandle([ ...integers ]) + this.onlyTransformNumber ? '' : '元';

    if( decimals !== '' ){
      decimals = this._dataDeciHandle([ ...decimals ])
    }
   
		return [ char, integers, decimals, suffix, ].join( '' );
	}
}