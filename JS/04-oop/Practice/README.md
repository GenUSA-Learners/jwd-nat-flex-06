# Javascript OOP Debrief

An activity for demonstrating class constructors and extending with parent and child subclasses

Today you work on objects, classes, and inheritance.  To do this, you will work independently on this project.  It should take you about 45 minutes.

For this project you will make three classes: one parent class and two child classes.

1. Your parent class should have:
    3 properties
    1 method

2. Your child classes should have:
    1 additional property each

3. One of your child classes should include an additional method

You can make your classes anything you want (e.g. Person, Vehicle, Media, Ship, School, etc.) there are no restrictions on what your classes are or what their methods do.  Get creative!

- Below is the sample JS from the opening sync session showing related structure for clarity
- An index file that links to the app.js file allows you to check your logic by logging values to the dev console in the browser.

```javascript
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

class Student extends Person {
  constructor(first, last, age, hairColor, grade) {
    super(first, last, age, hairColor);
    this.grade = grade;
  }
  graduateStudent(newGrade) {
    this.grade = newGrade;
  }
}

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
```

- FORK this repository onto your github

- Copy the https URL from your FORKED repo

- Once you are in your development folder in a terminal, run `git clone` followed by the URL you copied from your forked copy of this github repository

- In VSCode, select `File` in the top right, and select `Open Folder` then find the folder you cloned named `deploy-apps-lesson` and open it, **OR**

- Alternatively you can run in the terminal `cd js-oop-debrief` and run `code -a .` to directly open the folder in the window or `code .` to open in a new window

- make sure and `git add .`, and `git commit -m "commit message"` after functional working changes to your code i.e. made the parent class with propeties and works error free, then at points along the way `git push origin main`.
  
- When finished with the activity, submit a pull request from your fork!

***Happy Coding!***
