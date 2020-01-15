class User {
  constructor(userObj) {
    this.name = (userObj.name != undefined) ? userObj.name : '';
    this.email = (userObj.email != undefined) ? userObj.email : '';
    this.phone = (userObj.phone != undefined) ? userObj.phone : '';
    this.street = (userObj.address.street != undefined) ? userObj.address.street : '';
    this.suite = (userObj.address.suite != undefined) ? userObj.address.suite : '';
    this.city = (userObj.address.city != undefined) ? userObj.address.city : '';
  }

  // Wanted to test out getters
  // Doing user.address should return the string value
  get address() {
    return this.street + " " + this.suite + " " + this.city;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

module.exports = User;

