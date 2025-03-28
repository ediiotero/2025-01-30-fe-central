//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
// https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static sleep(number) {
    console.log(`Slept ${number} of hours`)
  }

  welcome() {
    console.log(`I'm ${this.name} and my age is ${this.age}`);
  }

  hello() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const person1 = new Person("Peter", 44);
const person2 = new Person("Stephanie", 22);
console.log(person1);
// person1.welcome()
// person1.hello()
// person2.welcome()
// person2.hello()

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }

  hello() {
    super.hello()
    console.log(`My gpa is ${this.gpa}`);
  }
}

const student1 = new Student("Tobi", 4, "3.0");
console.log(student1);
student1.hello();

class Teacher extends Person {
  constructor(name, age, classSize) {
    super(name, age);
    this.classSize = classSize;
  }

  hello() {
    console.log(`My class size is ${this.classSize}`)
  }
}

const teacher1 = new Teacher('Bruce', 33, 12)
console.log(teacher1)
teacher1.hello()

Person.sleep(8)