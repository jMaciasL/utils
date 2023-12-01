class Stack {
  constructor() {
    this.top = this.array[this.length - 1];
    this.bottom = this.array[0];
    this.length = 0
    this.array = {};
  }
  peek() {
    return this.top;
  }
  push(value) {
    this.top = value;
    if (this.) this.bottom = value;
  }

}
