//parent example
class Person {
    constructor(first, last, age, hairColor) {
      this.first = first;
      this.last = last;
      this.age = age;
      this.relatives = [];
      this.hairColor = hairColor;
    }
    greet() {
      console.log("Hello, I'm " + this.first + ' ' + this.last);
    }
    hasBirthday() {
      this.age++;
    }
    addRelative(relative) {
      this.relatives.push(relative);
    }
    changeHairColor(newColor) {
      this.hairColor = newColor;
    }
  }
  //child example
  class Student extends Person {
    constructor(first, last, age, hairColor, grade) {
      super(first, last, age, hairColor);
      this.grade = grade;
    }
    graduateStudent(newGrade) {
      this.grade = newGrade;
    }
  }
  //child example (grandchild)
  class Athlete extends Student {
    constructor(first, last, age, hairColor, grade) {
      super(first, last, age, hairColor, grade);
      this.sports = [];
    }
    addSport(sport) {
      this.sports.push(sport);
    }
  }
  
  const person1 = new Athlete('Jon', 'Jackson', 40, 'brown', 8);
  
  person1.greet();
  person1.addRelative('Jane Doe');
  person1.addSport('snow skiing');
  person1.hasBirthday();
  
  console.log(person1);