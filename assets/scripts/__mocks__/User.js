// Mock User class. Will be used for our User class test
class User {
  constructor() {
    this.name = "Your Mom";
    this.email = "email@test.com";
    this.phone = "775-777-7777";
    this.street = "Liberty Street";
    this.suite = "800";
    this.city = "Reno";
  }

  get address() {
    return this.street + " " + this.suite + " " + this.city;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

module.exports = User;
