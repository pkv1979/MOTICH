class User {
  country = "Ukraine";
  colorSkin = "red";

  constructor(name = "", surname = "", birthday = "1900-01-01", salary = 0) {
    this.name = name;
    this.surname = surname;
    this.birthday = new Date(birthday);
    this.#salary = salary;
  }

  getFamily() {
    return `${this.name} ${this.surname}`;
  }

  getAge() {
    const today = new Date();
    return today.getFullYear() - this.birthday.getFullYear();
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (this.#salary < value) {
      this.#salary = value;
    }
  }
}

const user = new User("Kostiantyn", "Panov", "1979-01-23", 15000);
