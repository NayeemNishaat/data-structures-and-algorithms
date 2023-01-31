class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index])
      for (let i = 0; i < this.keyMap[index].length; i++)
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];

    return undefined;
  }

  keys() {
    const keys = new Set();
    this.keyMap.forEach((kms) => kms.forEach((km) => keys.add(km[0])));
    return keys;
  }

  values() {
    const values = [];
    this.keyMap.forEach((kms) => kms.forEach((km) => values.push(km[1])));
    return values;
  }
}

const ht = new HashTable();
ht.set("Nayeem", "Nishaat");
ht.set("Nayeem", "Nishaat");
ht.set("Yeakub", "Nishaat");
console.log(ht.get("Nayeem"));
console.log(ht.keys());
console.log(ht.values());
