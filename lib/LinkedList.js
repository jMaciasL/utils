class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  preppend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  getNodeByIndex(index) {
    if (index > this.length) return;
    let i = 0;
    let currentNode = this.head;
    while(i != index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  insert(index, value) {
    const node = new Node(value);
    const currentNode = this.getNodeByIndex(index);
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
  }
  delete(index) {
    if (index > this.length - 1 || index < 0) return;
    if (!index) return this.unshift();
    const rearIndexNode = index - 1;
    const rearNode = this.getNodeByIndex(rearIndexNode);
    const deletedNode = rearNode.next;
    if (index == this.length -1) {
      this.tail = rearNode;
      rearNode.next = null;
    } else {
    const nextNode = rearNode.next.next;
    rearNode.next = nextNode;
    }
    this.length--;
    return deletedNode.value;
  }
  unshift() {
    const nextNode = this.head.next;
    const deletedNode = this.head;
    this.head = nextNode;
    this.length--;
    return deletedNode.value;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode.next != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.push(currentNode.value);
    return array;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const ll = new LinkedList(1);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.preppend(0);
ll.insert(1, 2);
console.log(ll.printList());
console.log(ll.unshift());
console.log(ll.printList());
console.log(ll.delete(3))
console.log(ll.printList());
console.log(ll.delete(4))
console.log(ll.printList());
console.log(ll.tail);
