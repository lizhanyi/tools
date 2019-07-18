import { numRank, currencyUnit, numMapToCh } from '../global'

export default class NumToZh_cn {

	numRank = numRank
	currencyUnit = currencyUnit
	numMapToCh = numMapToCh

	_test( arr, item, index ){
		const unit = this.numRank[ arr.length - index - 1 ];
		return item === '0' ? /万|亿/.test( unit ) ? unit : '零' : this.numMapToCh[ item ] + unit;
	}

	_dataIntHandle( arr ){
		return arr.map( ( item, index ) => this._test( arr, item, index ) )
			.join('')
			.replace(/零+/g, '零' )
			.replace(/零$/,'') + '元';
	}

	_dataDeciHandle( arr ){
		if( arr.length > 2 ){
			console.warn('系统仅保留两位小数，多余部分被忽略')
		}
		return arr.slice( 0, 2 ).map( ( item, index ) => item === '0' ? '' : this.numMapToCh[ item ] + this.currencyUnit[ index ] ).join('');
	}
	
	toZh( numStr ){
		if( !/^-?\d+(\.\d+)?$/.test( ( '' + numStr ).trim() ) )
			throw 'param is not number string';
		const [ integers='', decimals='' ] = numStr.split('.');
		return this._dataIntHandle([ ...integers ]) + this._dataDeciHandle([ ...decimals ]) + '整';
	}
}
