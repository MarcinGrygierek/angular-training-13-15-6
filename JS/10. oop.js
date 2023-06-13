class User {
  #name;
  #city;

  constructor(name) {
    this.#name = name;
  }

  setCity(city) {
    this.#city = city;
  }

  get name() {
    return this.#name;
  }
}

class SuperUser extends User {
  constructor(name) {
    super(name);
    this.role = 'SUPER USER';
  }
}

function User2(name) {
  this.name = name;
}

User2.prototype.setCity = function(city) {
  this.city = city;
}

const marcin = new User('Marcin');
marcin.setCity('Gliwice');

const user2 = new User2('Marcin');
user2.setCity('Gliwice');

const admin = new SuperUser('Admin');