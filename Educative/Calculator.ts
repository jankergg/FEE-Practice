function calc(exp: string): number {
  exp = exp || "1+2*3+2-1*4";
  return 0;
}
function dumpStack(num_stack: string[], op_stack: string[]) {
  while (op_stack.length) {
    const opr = op_stack.pop()!;
    if (opr === "(") {
      break;
    }
    num_stack.push(opr);
  }
}
function getRpn(exp: string) {
  const priority: { [key: string]: number } = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
    "(": 1,
  };
  const op_stack: string[] = [];
  const num_stack: string[] = [];
  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];
    if (isNaN(Number(char))) {
      const top = op_stack[op_stack.length - 1];
      if (char === ")") {
        dumpStack(num_stack, op_stack);
      } else {
        // if we've meet an lower priority operator, empty the stack
        if (op_stack.length > 0 && priority[char] < priority[top] && char !== "(") {
          dumpStack(num_stack, op_stack);
        }
        op_stack.push(char);
      }
    } else {
      num_stack.push(char);
    }
  }
  dumpStack(num_stack, op_stack);
  return num_stack.join("");
}
console.log(getRpn("1+2*3+(2-1)*4"));

// 123*+21-4*+
// 16+21-4*+
// 721-4*+
// 714*+
// 74+
// 11
