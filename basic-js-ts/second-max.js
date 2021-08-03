const secondMax = (arr) => {
  let secMax;
  if (arr.length > 1) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        secMax = maxNum;
        maxNum = arr[i];
      } else if (arr[i] !== maxNum && arr[i] > secMax) {
        secMax = arr[i];
      } else {
        secMax = arr[0];
      }
    }
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return "Error!";
  }

  return secMax;
};

console.log(
  secondMax([1, 2, 3, 140, 21, 100]),
  secondMax([4, 4, 4, 4, 4]),
  secondMax([9, 2, 21, 21]),
  secondMax([4123]),
  secondMax([])
);
