class TreeNode {
  value: number | string;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(v: number | string | TreeNode, left?: TreeNode, right?: TreeNode) {
    if (v instanceof TreeNode) {
      this.value = v.value;
      this.left = v.left;
      this.right = v.right;
    } else {
      this.value = v;
      this.left = left || null;
      this.right = right || null;
    }
  }
}
function convertRPN2Tree(str: string) {
  const node_stack: (TreeNode | number)[] = [];
  for (let i = 0; i < str.length; i++) {
    const n = Number(str[i]);
    if (isNaN(n)) {
      // we meet an operator
      const right = new TreeNode(node_stack.pop()!);
      const left = new TreeNode(node_stack.pop()!);
      node_stack.push(new TreeNode(str[i], left, right));
    } else {
      node_stack.push(n);
    }
  }
  return node_stack[0];
}

const res = convertRPN2Tree("7832-×4++");

console.log(JSON.stringify(res, null, 4));
