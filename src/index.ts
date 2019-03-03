const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age} and a ${gender}!`;
};

console.log(sayHi("Lucy", 35, "female"));
