
/**
 * 功能：检测身份证好是否合法
 */
import { PROVINCE_CODE, POWERS, PARITY_BIT, GENDERS } from './constant';

class IdCard{

  constructor(){
    this.__proto__.provinceCode = PROVINCE_CODE;
    this.__proto__.powers = POWERS;
    this.__proto__.parityBit = PARITY_BIT;
    this.__proto__.genders = GENDERS;
  }

  // 检测 地址
  checkAddressCode( addressCode ){

    const check = /^[1-9]\d{5}$/.test( addressCode );

    if( !check ) return false;

    return this.provinceCode[ parseInt( addressCode.substring( 0, 2 ) ) ];
  }

  // 校验出生日期
  checkBirthDayCode( birDayCode ){

    const check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test( birDayCode );

    if( !check ) return false;

    const year =  +birDayCode.substring( 0, 4 );
    const month = +birDayCode.substring( 4, 6 );
    const day = +birDayCode.substring( 6 );
    const date = new Date( year, month -1, day );

    if( date > new Date() ) return false;

    return ( date.getFullYear() == year ) && ( date.getMonth() == month - 1 ) && ( date.getDate() == day ) 
  }

   //计算校检码
   getParityBit( idCardNo ){
    const id17 = String( idCardNo );
    // 加权 
    let power = 0;
    for( let i = 0; i< 17; i++ ){
      power += Number( id17.charAt( i ) ) * Number( this.powers[i] );
    }
    // 取模
    const mod = power % 11;
    return this.parityBit[ mod ];
  }

  // 验证校检码 
  checkParityBit( idCardNo ){
    const parityBit = idCardNo.charAt( 17 ).toUpperCase();
    return this.getParityBit( idCardNo ) == parityBit;
  }

   // 校验15位或18位的身份证号码
   checkIdCardNo( idCardNo ){
    //15位和18位身份证号码的基本校验
    const check = /^\d{15}|(\d{17}(\d|x|X))$/.test( idCardNo );
    if( !check ) return false;

    //判断长度为15位或18位
    if( idCardNo.length == 15 ) 
      return this.check15IdCardNo( idCardNo );
    if( idCardNo.length == 18 ) 
      return this.check18IdCardNo( idCardNo );

    return false;
  }

  //校验15位的身份证号码
  check15IdCardNo(idCardNo){
    //15位身份证号码的基本校验
    let check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test( idCardNo );
    if( !check ) return false;
    //校验地址码
    const addressCode = idCardNo.substring( 0, 6 );
    check = this.checkAddressCode( addressCode );
    if( !check ) return false;

    const birDayCode = '19' + idCardNo.substring( 6, 12 );
    //校验日期码
    check = this.checkBirthDayCode( birDayCode );
    if(!check) return false;
    //验证校检码
    return this.checkParityBit( idCardNo );
  }

  //校验18位的身份证号码
  check18IdCardNo( idCardNo ){
    //18位身份证号码的基本格式校验
    let check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test( idCardNo ); 
    if( !check ) return false;
    //校验地址码
    const addressCode = idCardNo.substring( 0, 6 );
    check = this.checkAddressCode( addressCode );
    if( !check ) return false;
    //校验日期码
    const birDayCode = idCardNo.substring( 6, 14 );
    check = this.checkBirthDayCode( birDayCode );
    if( !check ) return false;
    //验证校检码
    return this.checkParityBit( idCardNo );
  }

  formateDateCN( date ){
    const year = date.substring( 0, 4 );
    const month = date.substring( 4, 6 );
    const day = date.substring( 6 );
    return [year, month, day ].join( '-' );
  }

  //获取信息
  getIdCardInfo( idCardNo ){
    const idCardInfo = {
      gender:"",  //性别
      birthday:"" // 出生日期(yyyy-mm-dd)
    };

    if( idCardNo.length == 15 ){
      const aday = '19' + idCardNo.substring( 6, 12 );
      idCardInfo.birthday = this.formateDateCN( aday );
      if( Number( idCardNo.charAt( 14 ) ) % 2 == 0 ){
        idCardInfo.gender = idCardNoUtil.genders.female;
      }else{
        idCardInfo.gender = idCardNoUtil.genders.male;
      }
    }else if( idCardNo.length == 18 ){
      const aday = idCardNo.substring( 6, 14 );
      idCardInfo.birthday = idCardNoUtil.formateDateCN( aday );
      if( Number( idCardNo.charAt( 16 ) ) % 2 == 0 ){
        idCardInfo.gender = idCardNoUtil.genders.female;
      }else{
        idCardInfo.gender = idCardNoUtil.genders.male;
      }
    }
    return idCardInfo;
  }
  
  /*18位转15位*/
  getId15( idCardNo ){
    if( idCardNo.length == 15 ){
      return idCardNo;
    }else if( idCardNo.length == 18 ){
      return idCardNo.substring( 0, 6 ) + idCardNo.substring( 8, 17 );
    }else{
      return null;
    }
  }

  /*15位转18位*/
  getId18( idCardNo ){
    if( idCardNo.length == 15 ){
      const id17 = idCardNo.substring( 0, 6 ) + '19' + idCardNo.substring( 6 );
      const parityBit = this.getParityBit( id17 );
      return id17 + parityBit;
    }else if ( idCardNo.length == 18 ){
      return idCardNo;
    }else{
      return null;
    }
  } 
}

const inst = new IdCard();

export default num => inst.checkIdCardNo( num );
