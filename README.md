
feitools
=============================================================
工具函数，提供一些常用的工具方法，项目使用 es6 语法开发，后期会更新成 ts 开发
### 安装
```
npm i feitools -S or yarn add feitools
```
### 工具方法
+ NumToZh_cn: 将阿拉伯数字 转换成 中文 ( 元 )
  ```javascript
  import { NumToZh_cn } from 'feitools';

  const numtozh_cn = new NumToZh_cn();
  numtozh_cn.convert(15.22); // 十五元贰角贰分
  ```
+ Memory: 封装 本地存储， 集中统一管理 存储数据
  ```javascript
  import { Memory } from 'feitools';
  /**
   * 建议实例化对象 名 与存储的键同名
   * 1. 构造函数，key: 构造函数的键， type: 数据存储的类型，session或local
   * 2. 实例属性和方法
   *     (1) map: 属性，存储类型映射
   *     (2) setItem( value ): 设置存储数据，value: 任意参数类型。无返回值
   *     (3) getItem(): 获取存储数据的值，无参数， 返回值为存储时的数据
   *     (4) getKey(): 检查存储键值是否存在，返回值布尔类型
   *     (5) removeItem(): 删除单条存储数据，无返回值
   *     (6) _getIntance(): 内部方法， 不建议使用，会造成实例数据异常
   * 3. 静态方法
   *     (1) instances：实例对象
   *     (2) keys(): 获取存储数据的键值， 无参数， 返回获取的结果
   *     (3) removeItems(keys=[]): 删除指定键的存储，不区分存储类型，keys: 以","隔开的字符串或数组， 无返回值。
   *     (4) clear(type="local"): 清空指定类型的存储，type: 存储类型，无返回值
   *     (5) clearAll(): 清空所有存储， 无返回值
  */
  const userInfo = new Memory('userInfo', 'local'); // 实例化一个 localStorage存储

  userInfo.setItem({ age: '10', name: 'name', userId: '123456' });
  userInfo.getItem(); // 返回 用户信息
  userInfo.getKey(); // 检查是否存在已存数据
  userInfo.removeItem(); // 删除 userInfo 存储

  Memory.clear('local'); // 清除所有的 localStrage 数据
  Memory.clear('session'); // 清除所有的 session 数据

  ```

+ timeFrame
  ```javascript
  import { timeFrame } from 'feitools';
  /**
   * @param { @func callback: 每一帧后的回调函数 }
   * @param { time: 多少时间执行， ms }
   * @param { callback: 提供三个参数. prev: 上一次时间, cur：当前时间, origin：起始时间 }
   * 
  */
  
  timeFrame( callback, time );  
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







