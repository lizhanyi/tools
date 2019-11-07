/**
 * 仅实现 简单的 业务需求， 如有其它需求请使用 moment
 * 后期后根据业务需求， 继续丰富功能
 */

import { tool } from './../utils';
import { types, map } from './constant';

export default class SuperDate{
    /**
     * @param { 满足格式 "/" 或 "-"， 建议使用"-" } date
     */
    constructor( date ){

        this.date =  date;

        // 结果默认值 
        this.result = this._format();

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

        if(!/^-?\d+$/.test( num )){
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


    /**
     * 获取新的日期
     */
    _getNewDate( type, num ){

        this._verify( num );

        let [ year, month, day ] = this.result;
        
        switch( type ){
            case 'year': year = year + num; break;
            case 'month': month = month + num; break;
            case 'day': day = day + num; break;
        }

        const maxDays = this.getMaxDay( year, month );

        if( type != 'day' ){

            day = day > maxDays ? maxDays : day;
        }

        this.result = new Date( year, month - 1, day );

        return this;
    }

    
    /**
     * 返回处理后的结果
     */
    get(){
        return [ 
            [ 'FullYear', 'year', 4 ], 
            [ 'Month', 'month', 2 ], 
            [ 'Date', 'day', 2 ], 
            [ 'Day', 'week', 1 ], 
            [ 'Hours', 'h', 2 ], 
            [ 'Minutes', 'm', 2 ], 
            [ 'Seconds', 's', 2 ], 
            [ 'Milliseconds', 'ms', 4] 
        ].reduce( ( prevTotal, [ method, key, count ] ) => {

            let value = this.result[ 'get' + method ]();

            if( method === 'Month' ){

                value = value + 1;
            }else if( method === 'Day') {
                
                value === 0 ? 7 : value;
            }

            value = tool.prevZero( value, count );
            
            return {
                ...prevTotal,
                [ key ]: value
            }
        }, {} );
    }

    
    /**
     * 功能： 获取某个月的天数
     */
    getMaxDay( year, month ){

        return new Date( year, month, 0 ).getDate();
    }


    /**
     * 前些天
     */
    beforeDays( num ){

        return this._getNewDate( 'day', -num );
    }


    /**
     * 前些月
     */
    beforeMonths( num ){

        return this._getNewDate( 'month', -num );
    }


    /**
     * 前些年 
     */
    beforeYears( num ){

        return this._getNewDate( 'year', -num );
    }


    /**
     *  获取当前的时间的前些天、月、年
     *
     */
    before( num, type="day" ){

        return this[ `before${ this.map[ tool.toUpper( type, true ) ] }s`]( +num ) 
    }


    /**
     * 几年后
     */
    afterYears( num ){

        return this._getNewDate( 'year', num );
    }


    /**
     * 几月后
     */
    afterMonths( num ){
        return this._getNewDate( 'month', num );
    }


    /**
     * 几天后
     */
    afterDays( num, _type ){
        return this._getNewDate( 'day', num );
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

        return this.after( num, type );
    }


    /**
     * 功能： 日期减法处理
     */
    sub( num, type="day" ){

        return this.before( -num, type );
    }
    
}