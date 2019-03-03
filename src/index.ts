class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lucy = {
  name: "Lucy",
  age: 36,
  gender: "female"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} and a ${person.gender}.`;
};

console.log(sayHi(lucy));
