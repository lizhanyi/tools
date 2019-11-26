
feitools
=======================================================================
工具库，提供一些常用的工具方法，项目使用 es6 语法开发，后期会更新成 ts 开发
### 安装
```
npm i feitools -S or yarn add feitools
```

### 工具方法

##### Memory: 封装 本地存储， 集中统一管理 存储数据
```javascript
/**
* 建议实例化对象 名 与存储的键同名，键 满足 \W+ 规则
* 1. 构造函数，key: 构造函数的键， type: 数据存储的类型，session或local
* 2. 实例属性和方法
*   (1) setItem( value, replacer ): 设置存储数据
*       value: 任意参数类型，replacer，数据筛选与 JSON.stringify 一致。无返回值
*   (2) getItem(): 获取存储数据的值，无参数， 返回值为存储时的数据
*   (3) getKey(): 检查存储键值是否存在，返回值布尔类型
*   (4) removeItem(): 删除单条存储数据，无返回值
* 3. 静态方法
*   (1) instances：实例对象
*   (2) keys(): 获取存储数据的键值， 无参数， 返回获取的结果
*   (3) removeItems(keys=[]): 删除指定键的存储，不区分存储类型，keys: 以","隔开的字符串或数组， 无返回值。
*   (4) clear(type="local"): 清空指定类型的存储，type: 存储类型，无返回值
*   (5) clearAll(): 清空所有存储， 无返回值
*/

import { Memory } from 'feitools';

// 实例化一个 localStorage存储
const userInfo = new Memory('userInfo', 'local'); 

// 存储数据
userInfo.setItem({ 
   age: '10', 
   name: 'name', 
   userId: '123456' 
});

// 获取存储数据信息
userInfo.getItem(); 

// 检查是否存在已存数据
userInfo.getKey();

// 删除 userInfo 存储 
userInfo.removeItem(); 

// 删除所有的 localStrage 数据
Memory.clear('local'); 

// 删除所有的 session 数据
Memory.clear('session'); 

// 删除 local 和 session 所有存储数据
Memory.clearAll(); 

// 获取 Memory 实例
Memory.instances;

// 获取所有 local 和 session 的 keys
Memory.keys();

// 删除 指定的存储数据的 key, 不区分存储类型
// 支持任意字符 分割，如 "a,b", "a b", "a$b"等，规则满足\W
Memory.removeItems(['userInfo']);
```


##### NumToZh_cn: 将阿拉伯数字 转换成 中文 ( 元 )

```javascript
/*
* 1. 实例方法
*   (1) toZh(numStr): 功能，转换函数，返回值：转换后的结果，参数，待转换的字符串
*/
import { NumToZh_cn } from 'feitools';

const numtozh_cn = new NumToZh_cn();

numtozh_cn.toZh( 15.22 ); // 十五元贰角贰分整

```


##### URL: 处理 URL 相关

```javascript
/*
* 1. 静态方法
*   (1) set(opt ): 功能，重置url，返回值：处理后的url，参数，json
*   (2) get( mid, onHash=false)： 功能：获取 url 参数值，返回值，字符串
*/

import { URL } from 'feitools';

const url = '?name=a&age=20#sex=m' // 假设 url 地址

URL.get( 'name' ); // a

URL.get( 'sex' ); // null

URL.get( 'sex', true ); // m

URL.set({ name: 'h', email: '163' }); //'?name=h&email=163&age=20#sex=m'

```
##### Class2type: 类型检测
```javascript
/*
*  
* 1. 实例方法
*   (1) getType( opt ): 核心方法
*   (2) isEmptyObject( param ): 检测 json 是否为空 
*/
class2type = new Class2type();
const {
    isBoolean, 
    isNumber, 
    isString,
    isUndefined,
    isNull,
    isFunction,
    isArray,
    isDate,
    isRegExp,
    isObject,
    isError,
    isSymbol,
    isSet,
    isMap,
    isPromise
} = class2type;


isBoolean( true ); // true

isNumber( 12 ); // true

isString( 'feitools' ); // true

isUndefined( undefined ); // true

isNull( null ); // true

isFunction( ()=>{} ); // true

isArray( [] ); // true

isDate( new Date() ); // true

isRegExp( /feitools/ ); // true

isObject( {} ); // true

isError( new Error( 'feitools' ) ); // true

isSymbol( new Symbol( 'feitools' ) ); // true

isSet( new Set(['feitools'])); // true

isMap( new Map( [ [ 'tool', 'feitools' ] ] ) ); // true

```

#### timeFrame: 时间帧
```javascript

import { timeFrame } from 'feitools';

timeFrame( ( prev, cur, origin ) => {
	console.log('Running after 1s')
}, 1000 ); 

```

#### SuperDate: 超级日期( 目标：打造方便的日期处理 )
```javascript
/*
* 功能：时间的加减，支持链式调用
* 1. add( num, type )
*   功能：增加 指定类型的值
*   参数：num, 数值，可以为负; type -> year, month, day 
*   返回值： 日期实例 
* 2. sub( num, type )
*   功能：减少 指定类型的值
*   参数：num, 数值，可以为负; type -> year, month, day
*   返回值：日期实例
* 3. get()
*   功能：获取日期的 json 值
*   参数：无
*   返回值：json( 后期 改成 返回指定 格式的值 如：YY-MM-DD )
*/
import { SuperDate } from 'feitools';

const superDate = new SuperDate( '2019-7-25' ); 

superDate.add( 10, 'year' ).get(); // {"year":"2015","month":"02","day":"02","week":"1","h":"00","m":"00","s":"00","ms":"0000"}

superDate.sub( 10, 'month' ).get(); 

superDate.sub( 10, 'day' ).get(); 

superDate.afterYears( 1 ).get(); // 1年后

superDate.afterMonths( 1 ).get(); // 1月后

superDate.afterDays( 1 ).get(); // 1天后

superDate.beforeYears( 1 ).get(); // 1年前

superDate.beforeMonths( 1 ).get(); // 1月前 

superDate.beforeDays( 1 ).get(); // 1天前

superDate.after( num, type ).get(); // num 年|月|日 后， type, year, month, day

superDate.before( num, type ).get(); // num 年|月|日 前， type, year, month, day

superDate.getMaxDay( year, month ); // 获取 指定月份的区间 最大值

superDate.afterYears( 1 ).beforeDays(1).afterMonths( 1 ).get(); // 链式调用

```
#### load: 加载静态资源 css、js、image

```javascript
/**
 * 功能：动态加载静态资源
 * 1. css( url )
 *  功能: 加载 css 资源
 *  参数：url, 资源路径
 *  返回值：promise 对象
 * 2. script( url )
 *  功能：加载 js 静态资源
 *  参数：url, 资源路径
 *  返回值：promise 对象
 * 3. image( url )
 *  功能：加载 图片 资源
 *  参数：url, 资源路径
 *  返回值：promise 对象
 * 
 * 4. fetch( param )
 *  功能：动态加载静态资源 入口函数
 *  参数：param 可以为 url 数组、或以逗号隔开的字符串
 *  返回值： promise 对象， 用于接收返回结果
 * 
*/

import { Load } from 'feitools';

const load = new Load(); // 实例化 Load
const log = console.log;
// 加载图片
load.image( '1.png' ).then( res => log( 'success' ) ).catch( res => log( 'fail' ) );

// 加载 css
load.css( 'css.css' ).then( res => log( 'success' ) ).catch( res => log( 'fail' ) );

// 加载 js
load.css( 'javascript.js' ).then( res => log( 'success' ) ).catch( res => log( 'fail' ) );

// 数组， 不区分文件
load.fetch([ 'png.png', 'gif.gif', 'css.css', 'javascript.js' ]).then( res => 
    console.log( 'success' ) 
).catch( res => 
    console.log( 'fail' ) 
);

load.fetch( 'png.png, gif.gif , css.css, javascript.js' ).then( res =>
    console.log( 'success' );
).catch( res =>
    console.log( 'fail' )
)

```
#### Tool 类
```javascript
/**
 * @dec 提供常用的基础功能和方法
 * 1. toUpper( letter, slice )
 *  功能：将首字母大写
 *  参数：letter, 字符串; slice，不传，返回第一个字母的大写字符， 否则返回首字母大写的字符串
 *  返回值：首字母的字符或首字母大写的字符串
 * 2. prevZero( content, count, pad )
 *  功能：给字符串加前导字符
 *  参数：content, 字符串; count, 实际需要的字符串位数; pad, 补充的字符串内容
 *  返回值：处理后的字符串
 * 3. pickUpFields( str, fields )
 *  功能：从 json 串 中 挑出指定的 字段数据，并返回 josn 数据
 *  参数：str, json 字符串; fields 数组， 指定的字段
 *  返回值：挑选后的 json 数据
 * 4. filterFields( value, fields )
 *  功能：指定数据 转换成 string 并只保留指定的 key 的数据
 *  参数：value, 指定的数据对象; fields, 指定的 键名 集合
 *  返回值：字符串
 * 5. formatDate( date, format )
 *  功能：格式化日期
 *  参数：date, 日期对象; format, 字符串，日期格式字符
 *  返回值：按指定格式处理后的结果
 * 6. groupArray( array, condition )
 *  功能：将数据分组
 *  参数：array, 数组; condition, 指定分割的索引
 *  返回值：二维数组
*/
    import { Tool } from 'feotools';
    const tool = new Tool();
    tool.groupArray([ 'q', 'w', 'e', 'r' ], 2 ) // [ ['q', 'w'], [ 'e', 'r' ] ]

    tool.formatDate( new Date(2015, 10, 10 ), 'YYYY年MM月DD日 hh时mm分ss秒' ); // 2015年11月10日 00时00分00秒

    tool.pickUpFields('{"name":"name","age":"age","company":"alibaba"}', ['name']); // { name: 'name'}

    tool.filterFields({name: 'name', age: 'age', sex: 'sex' }, ['name'] ); // '{"name":"name"}'
```
#### watermark 生成水印

```javascript
/**
 * 功能：生成水印
 * @dec 值生成水印图片， 如果需要请用背景实现( 或使用伪元素 )
 * 1. init()
 *  功能：初始化， 主要用于生成 canvas 画布，并设置相关参数
 *  参数：无
 *  返回值：当前实例
 * 2.render()
 *  功能：绘制画布
 *  参数：无 
 *  返回值：实例对象
 * 3. getImage( needle = false )
 *  功能：获取 图片 url 地址
 *  参数：needle, 默认为false, 当为 true 时会自动执行 init 和 render 方法
 *  返回值：base64 图片
 * 4. reRender( content )
 *  功能：重新绘制画布，从新初始化配置
 *  参数：content, 文案信息
 *  返回值：当前实例
 * 
 * 
*/

import { Watermark } from 'feitools';

const watermark = new Watermark(); // 实例化 Watermark

const url1 =  watermark.init().render().getImage();

const url2 =  watermark.getImage( true );

const url3 =  watermark.reRender( 'reRender' ).getImage();



const image = new Image();

image.src = url;




document.body.appendChild( image );

```


# m
## mm
### mmm
#### mmmm
##### mmmmmm
###### mmmmmm

**这是加粗的字体**

*这是加粗的字体*

*这是斜体加粗的文字*

~~这是加删除线的文字~~

>这是引用的内容

>>这是引用的内容

>>>>>>这是引用的内容

```
----

***

***

[百度一下，你就知道](https://baidu.com "百度一下你就知道")

- 列表1
- 列表2
- 列表3

+ 列表+1
   + 列表1-1
   + 列表1-2
   + 列表1-3
      + 列表1-3-1
      + 列表1-3-2
      + 列表1-3-3
         + 列表1-3-3-1
         + 列表1-3-3-2
***

1. 列表1
2. 列表2
3. 列表3

表头|表头|表头
---|:--:|---:
内容 | 内容 | 内容
内容 | 内容 | 内容
内容 | 内容 | 内容

  `const a = name`

```
const arr = [1, 2, 3, 4 ]
const fn = ( a, b ) => a + b;
const json = {
    name: 'name',
    age: 1,
    sex: [ 1, 2 ],
    info: {
        name: 'fly'
        arr: [ 'www', 'qqq', 'eee' ]
    }
}
```


`<p></p>`

\*\*取消Markdown关键字\*\*







