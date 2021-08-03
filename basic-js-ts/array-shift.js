const shift = (arr, dir, num) => {
  if (arr && dir && num) {
    for (let i = 0; i < num; i++) {
      if (dir === "left") {
        arr.push(arr.shift());
      } else if (dir === "right") {
        arr.unshift(arr.pop());
      }
    }
    return arr;
  } else {
    return "please input value";
  }
};

console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log(shift([1, 2, 3, 4, 5], "right", 3));
