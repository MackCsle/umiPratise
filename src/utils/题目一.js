/**按类型、按value值排序
   *params const arr = [
    {value: 2,lable: 1,type: "a",},
    {value: 543,lable: 21, type: "b",},
    {value: 222,lable: 31,type: "b",},
    {value: 322232,lable: 14,type: "c",},
    {value: 452,lable: 51,type: "b",},
    {value: 5585,lable: 16,type: "c",},
    {value: 25,lable: 16,type: "d",},
    {value: 555,lable: 16,type: "b",},
    {value: 1,lable: 16,type: "a",},
    {value: 555785,lable: 16,type: "c",},
  ];
   * return  
    const arr=[
          a:[
               {value: 1,lable: 16,type: "a",},
               {value: 2,lable: 1,type: "a",},
            ],
           b:[
              {value: 222,lable: 31,type: "b",},
              {value: 452,lable: 51,type: "b",},
              {value: 543,lable: 21, type: "b",},
               {value: 555,lable: 16,type: "b",},
              ]
          ]
   * 
   * 
   */
const arr = [
  { value: 2, lable: 1, type: 'a' },
  { value: 543, lable: 21, type: 'b' },
  { value: 222, lable: 31, type: 'b' },
  { value: 322232, lable: 14, type: 'c' },
  { value: 452, lable: 51, type: 'b' },
  { value: 5585, lable: 16, type: 'c' },
  { value: 25, lable: 16, type: 'd' },
  { value: 555, lable: 16, type: 'b' },
  { value: 1, lable: 16, type: 'a' },
  { value: 555785, lable: 16, type: 'c' },
  { value: 555785, lable: 19, type: 'c' },
];
const sortByValue = (arr) => {
  let newArr = [];
  arr.sort((a, b) => a.value - b.value);
  arr.forEach((el) => {
    if (newArr[el.type]) {
      newArr[el.type].push(el);
    } else {
      newArr[el.type] = [el];
    }
  });
  return newArr;
};
console.log(sortByValue(arr));
