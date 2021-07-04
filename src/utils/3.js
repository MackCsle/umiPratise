/**
 * 数组求交集（A∩B）、并集、合集（A∪B）
 *
 *
 */
let one = [1, 2, 3, 4, 5];
let two = [2, 3, 4, 7];
let obj1 = { name: 'zs', age: 18, school: '金华小学' };
let obj2 = { name: 'zss', age: 181, school: '金华小学', car: 'benchi' };
let obj3 = { name: 'zas', age: 181, school: '金华小学w' };
let setObj = new Set();
let unionObj = Object.assign(obj1, obj2, obj3);
console.log(Object.assign(obj1, obj2, obj3));
console.log(new Set([...one, ...two]));
console.log(Array.from(setObj.add(unionObj)).filter((v) => v.name === 'zas'));

//封装
const setArr = (a, b, type) => {
  let setArr;
  a = new Set(a);
  b = new Set(b);
  if (type === 'different') {
    setArr = new Set([...a, ...b].filter((v) => !a.has(v) || !b.has(v)));
  } else if (type === 'intersection') {
    setArr = new Set([...a].filter((v) => b.has(v)));
  } else if (type === 'unionArr') {
    setArr = new Set([...a, ...b]);
  } else {
    return;
  }
  return Array.from(setArr);
};
console.log(setArr(one, two, 'different'));
//
