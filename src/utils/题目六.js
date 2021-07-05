const obj1 = {
  小明: {
    englishName: 'Xiaoming',
    englishScore: 99,
  },
  小张: {
    englishName: 'Xiaozhang',
    englishScore: 100,
  },
};
const obj2 = {
  小明: {
    chineseName: '小明',
    chineseScore: 80,
  },
  小张: {
    chineseName: 'Xiaozhang',
    chineseScore: 80,
  },
  小黄: {
    chineseName: 'Xiaohuang',
    chineseScore: 89,
  },
};
const concatObj = (obj1, obj2) => {
  let obj = { ...obj1 };
  Object.keys(obj2).forEach((key) => {
    if (obj[key]) {
      obj[key] = Object.assign(obj1[key], obj2[key]);
    } else {
      obj[key] = obj2[key];
    }
  });
  return obj;
};
//console.log(concatObj(obj1,obj2))
//升级版
const obj3 = [
  {
    workId: 'WB5555',
    englishName: 'Xiaoming',
    englishScore: 99,
  },
  {
    workId: 'WB8989',
    englishName: 'Xiaozhang',
    englishScore: 100,
  },
];

const obj4 = [
  {
    workId: 'WB5555',
    chineseName: '小明',
    chineseScore: 80,
  },
  {
    workId: 'WB8989',
    chineseName: 'Xiaozhang',
    chineseScore: 80,
  },
  {
    workId: 'WB458848',
    chineseName: 'Xiaohuang',
    chineseScore: 89,
  },
];
const concatById = (obj1, obj2) => {
  let obj = [];
  console.log(obj);
  obj1.forEach((item, index) => {
    obj2.forEach((v, i) => {
      if (item.workId === v.workId) {
        obj.splice(index, 1, Object.assign(item, v));
      }
    });
  });
  return obj;
};
console.log(concatById(obj3, obj4));
