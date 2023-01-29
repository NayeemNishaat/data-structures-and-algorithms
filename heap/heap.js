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

  extractMax() {
    const vals = this.values;
    [vals[0], vals[vals.length - 1]] = [vals[vals.length - 1], vals[0]];
    const extracted = vals.pop();

    let parentIdx = 0,
      left = 2 * parentIdx + 1,
      right = 2 * parentIdx + 2;

    while (vals[left] > vals[parentIdx] || vals[right] > vals[parentIdx]) {
      if (vals[left] > vals[right])
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
heap.extractMax();
console.log(heap);
