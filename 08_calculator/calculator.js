const add = function (...args) {
  const input = args;
  let final = 0;

  for (i = 0; i < input.length; i++) {
    final += input[i];
  }
  return final
};

const subtract = function (...args) {
  let array = args;
  let final;

  array.forEach((v, k) => {
    if (k === 0) {
      final = v;
      return
    }
    final -= (v);
  });

  return final
};

const sum = function (...args) {

  return add(...args.flat());

};

const multiply = function (...args) {
  const input = args.flat();
  let final = 1;

  for (i = 0; i < input.length; i++) {
    final *= input[i];
  }

  return final
};

const power = function (...args) {
  const input = args.flat();
  let final = input[0] ** input[1];

  return final
};

const factorial = function (arg) {
  const LOWEST_FACTOR = 1;
  let end = arg;
  let final = LOWEST_FACTOR;
  let factors = [];

  while (LOWEST_FACTOR <= end) {
    factors.unshift(end);
    end--;
  }


  for (i = 0; i < factors.length; i++) {
    final *= factors[i];
  }

  return final

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
