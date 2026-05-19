/* === EXERCISE 1 CODE ALONG === */

class Pet {
  constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.show = function() {
          var text = "<p>Your pet's name is " + this.name + ". The pet's breed is " + this.breed + ".</p>";
          return text;
      };
  }
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name, breed);
  }
}


const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.show());




/* ==== EXERCISE 2 ==== */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.details = function() {
      let detail = `My name is ${this.name} and I am ${this.age} years old.`;    
    return detail;
    }
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
  }

  displayStudentDetails() {
    return `${this.displayDetails()} I am in grade ${this.grade}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); 
    this.subject = subject;
  }

  displayTeacherDetails() {
    return `${this.displayDetails()} I teach ${this.subject}.`;
  }
}


const student1 = new Student("Alice", 20, "Sophomore");
console.log(student1.displayStudentDetails());

const teacher1 = new Teacher("Mr. Smith", 45, "Mathematics");
console.log(teacher1.displayTeacherDetails());
