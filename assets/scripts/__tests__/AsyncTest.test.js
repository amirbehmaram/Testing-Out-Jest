require ('whatwg-fetch');

let AsyncTest = require('../AsyncTest.js');
let async = new AsyncTest();

// We can make the test() function an async one
test('Get Users Asynchronusly', async () => {
  await async.getUsers();
  expect(async.users.length).toEqual(10);
});
