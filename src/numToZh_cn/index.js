import { numRank, currencyUnit, numMapToCh } from './constant';

export default class NumToZh_cn {

	numRank = numRank
	currencyUnit = currencyUnit
	numMapToCh = numMapToCh

	_verify( arr, item, index ){
		const unit = this.numRank[ arr.length - index - 1 ];
		return item === '0' ? /万|亿/.test( unit ) ? unit : '零' : this.numMapToCh[ item ] + unit;
	}

	_dataIntHandle( arr, endStr1  ){
		return arr.map( ( item, index ) => this._verify( arr, item, index ) )
			.join('')
			.replace(/零+/g, '零' )
			.replace(/零$/,'') + endStr1;
	}

	_dataDeciHandle( arr ){
		if( arr.length > 2 ){
			console.warn('system is only remain 2 decimal places, other will be ignored!')
		}
		return arr.slice( 0, 2 ).map( ( item, index ) => item === '0' ? '' : this.numMapToCh[ item ] + this.currencyUnit[ index ] ).join('');
	}
	
	toZh( numStr, endStr1="元", endStr2="整" ){
		if( !/^-?\d+(\.\d+)?$/.test( ( '' + numStr ).trim() ) )
			throw 'param is not number string';
		const [ integers='', decimals='' ] = numStr.split('.');
		return this._dataIntHandle([ ...integers ], endStr2 ) + this._dataDeciHandle([ ...decimals ]) + endStr2;
	}
}
