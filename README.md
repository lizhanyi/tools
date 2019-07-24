
feitools
=============================================================
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
*   (1) setItem( value, replacer ): 设置存储数据，value: 任意参数类型,replacer,数据筛选与JSON.stringify一致。无返回值
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

numtozh_cn.toZh(15.22); // 十五元贰角贰分整

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

URL.get('name'); // a

URL.get('sex'); // null

URL.get('sex', true ); // m

URL.set({ name: 'h', email: '163' }); //'?name=h&email=163&age=20#sex=m'

```
##### class2type: 类型检测
```javascript
/*
*  
* 1. 实例方法
*   (1) getType( opt ): 核心方法
* 	(2) isEmptyObject( param ): 检测 json 是否为空 
*/

import { 
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
    isPromise,
} from 'feitools';

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
* 1. 实例方法
*   (1) getMaxDay( year, month ): 获取当前月的天数
*   (2) format(): 分割日期，目前只实现 2019-7-25(推荐)和2019/7/25，后期实现个性定制格式
*   (3) now(): 获取当前时间
*   (4) add( num, type ): 增加时间， 目前仅实现 type=year
*/
import { SuperDate } from 'feitools';

const superDate = new SuperDate('2019-7-25'); 

superDate.add( 10, 'year' ) // 2029-7-25
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

---

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







