require ('whatwg-fetch');

let JestTest = require('../JestTest');
let jester = new JestTest();

test('Test our sum function with 1 + 2 =', () => {
  expect(jester.sum(1,2)).toBe(3);
});

test('Class Object Assignment', () => {
  jester.objectAdd('one', 1);
  jester.objectAdd('two', 2);
  expect(jester.testingObject).toEqual({one: 1, two: 2});
});
