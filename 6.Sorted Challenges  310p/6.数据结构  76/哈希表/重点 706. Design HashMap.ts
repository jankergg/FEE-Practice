var MyHashMap = function () {
  this.size = 10000;
  this.arr = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.hash(key);
  let list = this.arr[hash];
  if (!list) {
    list = [];
    list.push([key, value]);
    this.arr[hash] = list;
  } else {
    let pair = list.find((i) => i[0] === key);
    if (pair) {
      pair[1] = value;
    } else {
      list.push([key, value]);
    }
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const list = this.arr[this.hash(key)];
  if (!list) {
    return -1;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === key) {
      return list[i][1];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let list = this.arr[this.hash(key)];
  if (list) {
    let idx = 0;
    let pair = list.find((v, i) => {
      idx = i;
      return v[0] === key;
    });
    if (pair) {
      // swap current with the last one. so we don't need to shift out arry
      let tmp = list[list.length - 1];
      list[idx] = tmp;
      list.pop();
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.size;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
