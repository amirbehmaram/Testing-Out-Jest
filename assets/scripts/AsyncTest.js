require('regenerator-runtime/runtime');
require ('whatwg-fetch');

let User = require("./User.js");

class AsyncTest {
  constructor() {
    this.posts = {};
    this.users = [];
  }

  // Good old API request to update out class data
  async getPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.posts = json;
      });
  }

  // Get our users the old fashioned way
  async getUsers() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.users = [];

        json.forEach(user => {
          let newUser = new User(user);
          this.users.push(newUser);
        });
      });
  }
}

module.exports = AsyncTest;
