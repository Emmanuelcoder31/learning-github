export default class User {
  constructor(email, name) {
    this._id = email;
    this.name = name;
  }
  greeting() {
    return `Hi,my name is ${this.name}`;
  }
}
