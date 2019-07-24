/**
 * 仅实现 简单的 业务需求， 如有其它需求请使用 moment
 * 后期后根据业务需求， 继续丰富功能
 */
export default class SuperDate{
    /**
     * @param { 满足格式 "/" 或 "-"， 建议使用"-" } date
     */
    constructor( date ){

        this.date =  date;

        this.dates = this.format();
    }


    /**
     * 获取 当前时间
     */
    now(){
        return Date.now();
    }


    /**
     * 日期格式化
     */
    format(){
        let [ year, month, day ] = this.date.split(/-|\//g);

        const maxDays = this.getEachMonthDays( year, month );

        // 当前天数大于 最大天数
        if(  day > maxDays ){
            day = maxDays;
        }

        // 月份 大于 12 
        if( month > 12 ){
            month = 12
        }

        return [ +year, +month, +day ];
    }

    
    /**
     * 功能： 获取每个月的天数
     */
    getMaxDay( year, month ){
       return new Date( year, month, 0 ).getDate();
    }


    /**
     * 功能： 日期加
     * number: 自然数
     */
    add( num, type="day" ){
        
        let [ year, month, day ] = this.dates;
        
        const endYear = year + num;
        
        const maxDays = this.getMaxDay( endYear, month );

        if( type === 'year' ){

            // 当前日期
            day = day > maxDays ? maxDays : day;
            
            if( day === 1 ){ // 当前月的 1 号

                month = month - 1;
                day = this.getMaxDay( endYear, month );
            }else{

                day = day - 1;
            }

            return [ 
                endYear, 
                month,
                day 
            ].join( '-' );
        }
    }
    

    /**
     * 功能： 日期减法处理
     */
    sub(){

    }

    
}