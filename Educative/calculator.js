const priority = {
  "*": 1,
  "/": 1,
  "+": 0,
  "-": 0,
  "(": 2,
};
const operations = {
  "*": (n1, n2) => n1 * n2,
  "/": (n1, n2) => n1 / n2,
  "+": (n1, n2) => n1 + n2,
  "-": (n1, n2) => n1 - n2,
};

// calculate the Reverse Polish Notation
function GetRPN(nums) {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    const char = nums[i];
    if (isNaN(char)) {
      let n2 = stack.pop();
      let n1 = stack.pop();
      let res = operations[char](n1, n2);
      stack.push(res);
    } else {
      stack.push(char);
    }
  }
  return stack[0];
}

function emptyOperator(nums, operators) {
  while (operators.length) {
    const oper = operators.pop();
    if (oper === "(") {
      break;
    }
    nums.push(oper);
  }
}

function Calculator(inStr) {
  const calcs = inStr.match(/\d+(\.\d+)?|[^0-9]/gi);
  const nums = [];
  const operators = [];

  // after walking through the string, we got a `reverse polish notation`
  for (let i = 0; i < calcs.length; i++) {
    const char = calcs[i];
    // popup the stack
    if (char === ")") {
      emptyOperator(nums, operators);
    } else {
      // if operator
      if (isNaN(char)) {
        let len = operators.length;
        let lastOper = operators[len - 1];
        // check if not `(` to prevent popup before meet `)`
        if (len > 0 && priority[char] <= priority[lastOper] && lastOper !== "(") {
          emptyOperator(nums, operators);
        }
        operators.push(char);
      } else {
        // if num
        nums.push(parseFloat(char));
      }
    }
  }

  emptyOperator(nums, operators);
  console.log(nums.join(""));
  return GetRPN(nums);
}
// console.log(Calculator("1+2*3-4+5/6"));
console.log(Calculator("1+2*3+(2-1)*4"));
// console.log(Calculator("(1+2)*3-4+5/6"));
// console.log(Calculator("(1+2.2)*(3-4+5)/6"));
