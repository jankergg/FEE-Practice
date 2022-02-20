/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.map = {};
    this.capacity = capacity;
    this.size = 0;
    this.head = {};
    this.tail = {};
    this.head.next = this.tail; //initialize double LL
    this.tail.prev = this.head;
};

function moveToHead(head, node){
    deleteNode(node);
    addNode(head, node);
}
function deleteNode(node){
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
}
function addNode(head, node){
    const next = head.next;
    head.next = node;
    node.prev = head;
    node.next = next;
    next.prev = node;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]){
        moveToHead(this.head, this.map[key]);
        return this.map[key].value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key] == undefined){
        this.map[key] = {key:key, value:value};
        addNode(this.head, this.map[key]);
        this.size++;
    } else {
        this.map[key].value = value;
        moveToHead(this.head, this.map[key]);
    }
    if(this.size > this.capacity){
        // need to remove tail
        const nodeToRemove = this.map[this.tail.prev.key];
        delete this.map[this.tail.prev.key];
        deleteNode(nodeToRemove);
        this.size--;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */