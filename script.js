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
