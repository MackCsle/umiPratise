/*
现有一个数组，内有50个object。如下：求数组中value值之和，挑出来value是奇数的集合
*/
const arr = [
  { label: 'label1', value: 1 },
  { label: 'label2', value: 2 },
  { label: 'label3', value: 3 },
  { label: 'label4', value: 4 },
  { label: 'label5', value: 5 },
  { label: 'label6', value: 6 },
  { label: 'label7', value: 7 },
  { label: 'label8', value: 8 },
  { label: 'label9', value: 9 },
  { label: 'label10', value: 10 },
];
const valueSum = (arr) => {
  let newArr = [];
  const sum = arr.reduce((total, item, index, array) => {
    return item.value + total;
  }, 0);
  arr.forEach((v) => {
    if (v.value % 2 === 1) {
      newArr.push(v);
    }
  });
  return { sum, newArr };
};
console.log(valueSum(arr));
