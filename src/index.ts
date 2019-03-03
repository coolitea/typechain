interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Lucy",
  age: 36,
  gender: "female"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} and a ${person.gender}!`;
};

console.log(sayHi(person));
