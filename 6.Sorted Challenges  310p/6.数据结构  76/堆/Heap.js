class Heap {
  #arr = [];
  #comp = () => void 0;
  constructor(compFn = (a, b) => a - b) {
    if (typeof compFn === "function") {
      this.#comp = compFn;
    }
  }
  root() {
    return this.#arr[0];
  }
  size() {
    return this.#arr.length;
  }
  toArray() {
    return this.#arr.slice(0);
  }
  insert(target) {
    let left = 0,
      right = this.#arr.length;
    while (left < right) {
      const mid = (left + right) >> 1;
      const compRes = this.#comp(target, this.#arr[mid]);
      if (compRes > 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.#arr.splice(left, 0, target);
  }
  at(index) {
    return this.#arr[index];
  }
  pop() {
    this.#arr.pop();
  }
  erase(target) {
    let left = 0,
      right = this.size();
    while (left < right) {
      const mid = (left + right) >> 1;
      const compRes = this.#comp(target, this.#arr[mid]);
      if (compRes === 0) {
        return this.#arr.splice(mid, 1);
      } else if (compRes > 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }
}
exports.Heap = Heap;
// test cases //
const h = new Heap((a, b) => b.age - a.age);
for (let i = 0; i < 5; i++) {
  const v = Math.trunc(Math.random() * 100);
  h.insert({ age: v, name: Math.random().toString() });
}
console.log(h.toArray());
const x = h.at(3);
h.erase(x);
console.log(h.toArray());
