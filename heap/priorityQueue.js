class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    const values = this.values;
    values.push(newNode);
    let idx = values.length - 1,
      parentIdx = Math.floor((idx - 1) / 2);

    while (values[idx].priority < values[parentIdx]?.priority) {
      [values[idx], values[parentIdx]] = [values[parentIdx], values[idx]];

      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  dequeue() {
    const vals = this.values;
    [vals[0], vals[vals.length - 1]] = [vals[vals.length - 1], vals[0]];
    const extracted = vals.pop();

    let parentIdx = 0,
      left = 2 * parentIdx + 1,
      right = 2 * parentIdx + 2;

    while (
      vals[left]?.priority < vals[parentIdx]?.priority ||
      vals[right]?.priority < vals[parentIdx]?.priority
    ) {
      if (!vals[right] || vals[left].priority < vals[right].priority)
        ([vals[left], vals[parentIdx]] = [vals[parentIdx], vals[left]]),
          (parentIdx = left);
      else
        ([vals[right], vals[parentIdx]] = [vals[parentIdx], vals[right]]),
          (parentIdx = right);

      (left = 2 * parentIdx + 1), (right = 2 * parentIdx + 2);
    }
    return extracted;
  }
}

const heap = new priorityQueue();

heap.enqueue("Help", 7);
heap.enqueue("Urgent", 5);
heap.enqueue("Immediate", 2);
heap.enqueue("Emergency", 0);

console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());

// Note: If we want to handle things that have same priority level then we can use another property in the node class like time and then when dequeuing if the priority levels are same we can compare the time and other properties to measure the priority!
