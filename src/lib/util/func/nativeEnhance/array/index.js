import group from './group';
// 数组 行列互换
import rowColumnExchange from './rowColumnExchange';
// 打乱数组
import shuffle from './shuffle';

Object.assign( Array.prototype, {
  rowColumnExchange,
  group,
  shuffle, 
});
