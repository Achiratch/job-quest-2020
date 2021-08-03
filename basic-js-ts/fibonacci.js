const fib = (num) => {
  if (num > 0) {
    const arr = [1, 1];
    for (let i = 0; i < num - 2; i++) {
      arr.push(arr[i]+arr[i+1])
    }
    return "fib = "+arr[num - 1];
  } else {
    return "Number must be more than 0";
  }
};

console.log("Assign number 1 : ",fib(1));
console.log("Assign number 3 : ",fib(3));
console.log("Assign number 8 : ",fib(8));
console.log("Assign number 12 : ",fib(12));


