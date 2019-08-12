/**
 * 仅实现 简单的 业务需求， 如有其它需求请使用 moment
 * 后期后根据业务需求， 继续丰富功能
 */

import { tool } from './../unit';
import { types, map } from './constant';

export default class SuperDate{
    /**
     * @param { 满足格式 "/" 或 "-"， 建议使用"-" } date
     */
    constructor( date ){

        this.date =  date;

        this.dates = this._format();

        // 结果默认值 
        this.result = this.dates;

        // 操作日期时 的数据类型
        this.__proto__.types = types;

        // 简写
        this.__proto__.map = map;

    }


    /**
     * 获取 当前时间
     */
    _now(){
        return Date.now();
    }


    /**
     * 检测 数据类型 
     */
    _verify( num, type ){

        if(!/^\d+$/.test( num )){
            throw 'Expected num is wrong'
        }

        if( type && !this.types.includes( type ) ){
            throw 'Expected type is wrong'
        }

    }


    /**
     * 日期格式化, 去除非法日期格式
     */
    _format(){
        
        if( !/^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}/.test( this.date ) ){
            throw 'date format is wrong'
        }
        
        let [ year, month, day ] = this.date.split(/-|\//g);

        const maxDays = this.getMaxDay( year, month );

        // 天数校正
        day = day < 1 ? 1 : day > maxDays ? maxDays : day;

        // 月份校正
        month = month < 1 ? 1 : month > 12 ? 12 : month;

        return [ +year, +month, +day ];
    }

    _getNewDate( year, month, day ){

        const date = new Date( year, month, day );

        return [ 
            date.getFullYear(), 
            date.getMonth() + 1, 
            date.getDate() 
        ];

    }

    
    /**
     * 返回处理后的结果
     */
    get(){

        let [ year, month, day ] = this.result;

        month = tool.prevZero( month );
        
        day = tool.prevZero( day );

        return [ year, month, day ].join('-');
    }

    
    /**
     * 功能： 获取某个月的天数
     */
    getMaxDay( year, month ){
        return new Date( year, month, 0 ).getDate()
    }


    /**
     * 前些天
     */
    beforeDays( num ){

    }


    /**
     * 前些月
     */
    beforeMonths( num ){
        console.log(num, 'num');
    }


    /**
     * 前些年 
     */
    beforeYears( num ){

        // let [ year, month, day ] = this.dates;

        // const maxDays = this.getMaxDay( year, month );

        // // 当前日期
        // day = day > maxDays ? maxDays : day;
        
        // if( day === 1 ){ // 当前月的 1 号

        //     month = month - 1;
        //     day = this.getMaxDay( year, month ); 
        // }else{

        //     day = day - 1;
        // }

        // this.result = [ +year + num, month, day ];

        // return this;
    }


    /**
     *  获取当前的时间的前些天、月、年
     *
     */
    before( num, type ){

        // if( !this.types.includes( type ) ){
        //     throw 'Expected type is wrong'
        // }

        // return this[ `before${ this.map[ tool.toUpper( type, true ) ] }s`]( num ) 
    };


    /**
     * 几年后
     */
    afterYears( num ){
        
        this._verify( num );

        let [ year, month, day ] = this.dates;

        year = year + num;

        const maxDays = this.getMaxDay( year, month );

        day = day > maxDays ? maxDays : day;

        this.result = this._getNewDate(  year, month, day );

        return this;
    }


    /**
     * 几月后
     */
    afterMonths( num ){

        this._verify( num );
        
        let [ year, month, day ] = this.dates;

        month = month + num;

        const maxDays = this.getMaxDay( year, month );

        day = day > maxDays ? maxDays : day;

        this.result = this._getNewDate( year, month, day );

        return this;
    }


    /**
     * 几天后
     */
    afterDays( num ){

        this._verify( num );

        const [ year, month, day ] = this.dates;

        this.result = this._getNewDate( year, month - 1, +num + day );

        return this;
    }
    

    /**
     *  获取当前的时间的之后些天、月、年
     *
     */
    after( num, type ){

        return this[ `after${ this.map[ tool.toUpper( type, true ) ] }s`]( +num );
    }
    

    /**
     * 功能： 日期加
     * num: 自然数
     * type: day, month, year
     */
    add( num, type="day" ){

        this._verify( num, type );

        return this.after( +num, type );
    }


    /**
     * 功能： 日期减法处理
     */
    sub(){

    }

    
}