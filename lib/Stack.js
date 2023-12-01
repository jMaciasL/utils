
export default class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    if (this.isEmpty()) this.bottom = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const removedValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    if (!this.length) this.bottom = null;
    return removedValue;
  }

  isEmpty() {
    return !this.length;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
