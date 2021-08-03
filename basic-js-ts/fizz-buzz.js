const fizzBuzz = (num) => {
  let out;
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      out = "FizzBuzz";
      break;
    case num % 3 === 0:
      out = "Fizz";
      break;
    case num % 5 === 0:
      out = "Buzz";
      break;
  }
  return out;
};

console.log(fizzBuzz(21), fizzBuzz(25), fizzBuzz(45));
