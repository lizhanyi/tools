export default class NumToZh_cn {
	numLevel = [ "", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿" ]
	currencyUnit = [ '角', '分' ]
	numMapToCh = {
		'0': '零',
		'1': '壹',
		'2': '贰',
		'3': '叁',
		'4': '肆',
		'5': '伍',
		'6': '陆',
		'7': '柒',
		'8': '捌',
		'9': '玖',
		'０': '零',
		'１': '壹',
		'２': '贰',
		'３': '叁',
		'４': '肆',
		'５': '伍',
		'６': '陆',
		'７': '柒',
		'８': '捌',
		'９': '玖',
	}

	_test( arr, item, index ){
		const unit = this.numLevel[ arr.length - index - 1 ];
		return item === '0' ? /万|亿/.test( unit ) ? unit : '零' : this.numMapToCh[ item ] + unit;
	}

	_dataIntHandle( arr ){
		return arr.map( ( item, index ) => this._test( arr, item, index ) )
			.join('')
			.replace(/零+/g, '零' )
			.replace(/零$/,'') + '元';
	}

	_dataDeciHandle( arr ){
		return arr.map( ( item, index ) => item === '0' ? '' : this.numMapToCh[ item ] + this.currencyUnit[ index ] ).join('');
	}
	
	convert( numStr ){
		if( !/^-?\d+(\.\d+)?$/.test( numStr.trim() ) )
			throw 'param is not number string';
		const [ integers='', decimals='' ] = numStr.split('.');
		return this._dataIntHandle([ ...integers ]) + this._dataDeciHandle([ ...decimals ]) + '整';
	}
}
