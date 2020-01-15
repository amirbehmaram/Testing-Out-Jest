//import User from './User.js';
let User = require('../User.js');

// Mock our User class to test out the classes methods
// This looks within the __mocks__ directory for a User.js to use.
jest.mock('../User.js');

test('Get name from a User', () => {
  let newUser = new User();
  expect(newUser.name).toBe("Your Mom");
});

test('Get Address from User', () => {
  let newUser = new User();
  expect(newUser.address).toBe("Liberty Street 800 Reno");
});

test('Update User\'s Email', () => {
  let newUser = new User();
  newUser.updateEmail('newEmail@yahoo.com');
  expect(newUser.email).toBe('newEmail@yahoo.com');
});
