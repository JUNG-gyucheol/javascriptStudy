class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Nive", "Job", -1);
console.log(user1.age);

class Experiment {
  publicFiedl = 2;
  #privateField = 0; //private
}
const experiment = new Experiment();
console.log(experiment.publicFiedl);
console.log(experiment.privateField);

//static
class Article {
  static publisher = "coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
console.log(Article.publisher);
