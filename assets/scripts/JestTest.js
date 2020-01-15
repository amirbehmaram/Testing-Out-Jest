class JestTest {
  constructor() {
    this.testingObject = {};
  }

  // Simple Sum function
  sum(a, b) {
    return a + b;
  }

  // Class object manipluation function
  objectAdd(key, value) {
    this.testingObject[key] = value;
  }
}

module.exports = JestTest;
