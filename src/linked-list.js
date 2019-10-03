const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
    this.list = [];
  }

  actual() {
    this.length = this.list.length;
    if (this.list.length == 0) {
      this._head = null;
      this._tail = null;
      return;
    }
    this._head = this.list[0];
    this._tail = this.list[this.list.length - 1];
    this.list.forEach((node, index) => {
        node.prev = index === 0 ? null : index - 1;
        node.next = index === this.list.length - 1 ? null : index + 1;
      }
    );
  }

  append(data) {
    let el = new Node(
      data, 
      this.list.length > 0 ? 0 : null,
    );
    this.list.push(el);
    this.actual();
    return this;
  }

  head() {
    return this._head ? this._head.data : null;
  }

  tail() {
    return this._tail ? this._tail.data : null;
  }

  at(index) {
    return this.list[index].data;
  }

  insertAt(index, data) {
    let el = new Node(
      data, 
      index > 0 ? index-1 : null,
      index + 1
    );
    this.list.splice(index, 0, el);
    this.actual();
    return this;
  }

  isEmpty() {
    return this.list.length === 0 ? true : false;
  }

  clear() {
    this.list = [];
    this.actual();
    return this;
  }

  deleteAt(index) {
    this.list.splice(index, 1);
    return this;
  }

  reverse() {
    this.list.reverse();
    this.actual();
    return this;
  }

  indexOf(data) {
    let res = -1;
    this.list.forEach((node, index) => {
      if (node.data === data) res = index;
    });
    return res;
  }
}

module.exports = LinkedList;
