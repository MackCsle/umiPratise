const { values, set } = require('lodash');

/**
 * 名字去重
 * @param names=['James','james','Bill Gates','bill Gates','Hello World','HELLO WORLD','Helloworld'];
 * @return: return ['james', 'bill gates', 'hello world', 'helloworld'];
 */
const namesParams = [
  'James',
  'james',
  'Bill Gates',
  'bill Gates',
  'Hello World',
  'HELLO WORLD',
  'Helloworld',
];
const nameDeduplication = (names) => {
  if (names && names.length > 0) {
    names.forEach((value, index) => {
      names[index] = value.toLowerCase();
    });
    return [...new Set(names)].sort();
  }
  return null;
};
const result = nameDeduplication();
console.log(result);
