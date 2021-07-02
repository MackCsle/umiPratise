/**
 * 重复次数最多的IP数
 * @param ipLines: ip  address
 * @return: return highestFrequency ip address
 */
lines = ['192.168.1.1', '192.118.2.1', '192.168.1.1'];
function highestFrequency(ipLines) {
  if (Array.isArray(ipLines) && ipLines.length > 0) {
    var [obj, max, maxName, maxList] = [{}, 1, '', []];
    ipLines.forEach((value) => {
      if (obj[value]) {
        obj[value]++;
        if (obj[value] > max) {
          max = obj[value];
          maxName = value;
        }
      } else {
        obj[value] = 1;
      }
    });
    for (key in obj) {
      if (obj[key] == max) {
        let maxItem = {};
        maxItem[key] = obj[key];
        maxList.push(maxItem);
      }
    }
    return maxList;
  }
  return '请重新输入';
}
console.log('====================================');
console.log(highestFrequency([22, 33, 66, 22, 66, 55, 66, 53, 55, 55]));
console.log(highestFrequency(lines));
console.log('====================================');
