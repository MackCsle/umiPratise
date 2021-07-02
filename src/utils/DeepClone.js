//普通方法
let test = {
  x: 1,
  y: 2,
  z: {
    a: 4,
    b: 5,
  },
  q: Symbol(),
  f: new Date(),
};
let test1 = {
  x: 6,
  b: 3,
  c: {
    q: 2,
    z: 66,
  },
};
// 深拷贝
let result = JSON.parse(JSON.stringify(test));
// 改变拷贝后的值
result.z.a = 40;
console.log(test);
console.log(result);
// 手工实现
const deepClone = (obj) => {
  let cloneObj;
  if (obj && typeof obj !== 'object') {
    cloneObj = obj;
  } else {
    cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          cloneObj[key] = deepClone(obj[key]);
        } else {
          cloneObj[key] = obj[key];
        }
      }
    }
  }
  return cloneObj;
};
let deepResult = deepClone(test);
deepResult.z.a = 66;
console.log(deepResult, test);
// Object.assign()
console.log(Object.assign(test, test1));
