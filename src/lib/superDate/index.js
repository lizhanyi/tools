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
        
        let [ year, month, day ] = this.date.split(/-|\//g);

        const maxDays = this.getMaxDay( year, month );

        // 当前天数大于 最大天数
        day = day > maxDays ? maxDays : day;

        // 月份 大于 12 
        month = month > 12 ? 12 : month;


        return [ +year, +month, +day ];
    }

    
    /**
     * 返回处理后的结果
     */
    get(){

        let [ year, month, day ] = this.result;

        month = String(month).padStart( 2, '0' );

        day = String(day).padStart( 2, '0' );

        return [ year, month, day ].join('-');
    }

    
    /**
     * 功能： 获取每个月的天数
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

        const maxDays = this.getMaxDay( year, month );

        // 当前日期
        day = day > maxDays ? maxDays : day;
        
        if( day === 1 ){ // 当前月的 1 号

            month = month - 1;
            day = this.getMaxDay( year, month ); 
        }else{

            day = day - 1;
        }

        this.result = [ +year + num, month, day ];

        return this;
    }


    /**
     * 几月后
     */
    afterMonths( num ){
        return this.afterDays( num, 'month' );
    }


    /**
     * 几天后
     */
    afterDays( num, type ){

        this._verify( num );

        const [ year, month, day ] = this.dates;
        const rest = type === 'month' ? [ +num + month - 1, day ] : [ month - 1, +num + day ];
        const date = new Date( year, ...rest );

        this.result = [ 
            date.getFullYear(), 
            date.getMonth() + 1, 
            date.getDate() 
        ];

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