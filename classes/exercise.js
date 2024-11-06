const _count = new WeakMap();
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("stack is empty");
    console.log(items[items.length - 1]);
  }

  push(val) {
    _items.get(this).push(val);
  }

  pop() {
    const items = _items.get(this);
    if (items.length == 0) throw new Error("stack is empty");
    items.pop();
  }

  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
