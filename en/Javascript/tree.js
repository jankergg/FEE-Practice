class BTree {
  constructor() {
    this.root = this.newNode();
  }

  add(data) {
    if (!data) {
      return;
    }
    if (isNaN(this.root.data)) {
      this.root.data = data;
      return;
    }
    this.sink(data, this.root);
    return this;
  }

  sink(data, root) {
    if (!root) {
      return;
    }
    if (data > root.data) {
      if (!root.right) {
        root.right = this.newNode(data);
        return;
      }
      this.sink(data, root.right);
    } else {
      if (!root.left) {
        root.left = this.newNode(data);
        return;
      }
      this.sink(data, root.left);
    }
  }

  newNode(data = NaN) {
    return {
      data,
      left: null,
      right: null,
    };
  }
}

const tree = new BTree();
tree.add(20);
tree.add(30);
tree.add(60);
tree.add(10);
tree.add(15);
tree.add(35);
tree.add(5);
tree.add(50);

console.log(JSON.stringify(tree, null, "  "));
