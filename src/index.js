import answer from 'the-answer';

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }

  static MAXIMUM_AGE = 120;
  static MINIMUM_AGE = 0;
}

const foo = () => {
  console.log(`the ultimate answer of the universe is: ${answer}`);
};

export { foo, Person };
