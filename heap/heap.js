class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    const vals = this.values;
    vals.push(element);
    let idx = vals.length - 1,
      parentIdx = Math.floor((idx - 1) / 2);

    while (vals[idx] > vals[parentIdx]) {
      [vals[idx], vals[parentIdx]] = [vals[parentIdx], vals[idx]];

      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
}

const heap = new maxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);

console.log(heap);
