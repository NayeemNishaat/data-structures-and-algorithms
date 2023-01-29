class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    const val = this.values;
    val.push(element);
    let index = val.length - 1;
    let parentIndex = Math.floor(index - 1) / 2;

    while (val[index] > val[parentIndex]) {
      [val[index], val[parentIndex]] = [val[parentIndex], val[index]];

      index = parentIndex;
      parentIndex = Math.floor(index - 1) / 2;
    }
  }
}

const heap = new maxBinaryHeap();
heap.insert(6);
heap.insert(45);
heap.insert(60);
heap.insert(6000);

console.log(heap);
