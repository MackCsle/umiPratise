/*
 * 获取5个范围在[1,100]之间的随机数.
 */
const getRandom = () => {
  let nums = [];
  for (let i = 0; i < 5; i++) {
    nums[i] = Math.floor(Math.random() * 100) + 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        i--;
      }
    }
  }
  return nums;
};
console.log(getRandom());
