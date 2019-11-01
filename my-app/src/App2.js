import React from "react";
import person, { males, females } from "./file2";
//import males from "./file2";
//import females from "./file2";


export default function App2() {
  return (
    <div>
      <h3>Exercise 22222222222</h3>
      <p>{gen}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{person.email}</p>
      <p>{email}</p>
      <p>{firstName} {email}</p>
      <p>{seven}</p>
    </div>
  );
}

const gen = person.gender;
const { firstName, email } = person;
const { gender, lastName } = person;
var a, b, rest;
[a, b, ...rest] = [males, 20, 30, 40, 50];
const four = males.concat(females);
const males2 = ["Kurt", "Helle"];
const females2 = ["Tina"];
const seven = males.concat(males2, females, females2)

console.log(person.firstName)
console.log(a)
console.log(b)
console.log(rest)
console.log(four)
console.log(seven)
console.log(males, females)

