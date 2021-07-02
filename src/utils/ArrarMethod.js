function formatMoney(s, digit = 2) {
  if (!s) {
    return '';
  }
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(digit) + '';
  var l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1];
  t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
}
console.log(formatMoney('600.23', 2));

// // const { parseInt } = require("lodash");

// function toPercent(point){
//     if (point==0) {
//         return 0;
//     }
//     var str=Number(point*100).toFixed(2);
//     str+="%";
//     return str;
// }
// // console.log(toPercent(0.2588))
// function valueToPercent(value) {
//     if(value==0){
//        return 0;
//     }
//     value = value + '';
//     const pointIndex = value.indexOf('.');
//     if (pointIndex === -1) return (value - 0) * 100;
//     const powIndex = value.length - pointIndex - 1;
//     return (value.replace('.', '') - 0) * Math.pow(10, 2 - powIndex)+"%";
// }
//  console.log(valueToPercent(0.6))
// console.log( parseInt("12月","sss") )

function valueToPercent(value) {
  value = value + '';
  const pointIndex = value.indexOf('.');
  if (pointIndex === -1) return (value - 0) * 100;
  const powIndex = value.length - pointIndex - 1;
  const values = value.replace('.', '') - 0;
  const newIndex = Math.pow(10, 2 - powIndex);
  return values * newIndex;
}

console.log(valueToPercent(0.911), 911 * 0.1);

// function formatNoFixed(num) {
//    if(num==0){
//       return 0;
//    }
//    const numToString = `${num}`;
//    let strFront = '';
//    let strEnd = '';
//    let meetPoint = false;
//    for (let i = 0; i < numToString.length; i++) {
//      if (numToString[i] == '.') {
//        meetPoint = true;
//      }
//      meetPoint ? (strEnd += numToString[i]) : (strFront += numToString[i]);
//    }
//    let result = '';
//    strEnd
//      ? (result = `${strFront.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')}.${strEnd.replace('.', '')}`)
//      : (result = strFront.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'));
//    return result;
//  }

// console.log(formatNoFixed(0))
