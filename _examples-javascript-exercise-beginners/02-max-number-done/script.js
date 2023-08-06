console.log('02-max-number');

function findMaxNumber(nums){
  nums.sort((a,b) => b - a);
  return (nums[0]);
}

let checkMax1 = findMaxNumber([20, 2, 1, 21]);
console.log('Max Number:',checkMax1);

let checkMax2 = findMaxNumber([10, 1000, 100, 0]);
console.log('Max Number:',checkMax2);

let checkMax3 = findMaxNumber([100, 100, 101]);
console.log('Max Number:',checkMax3);
