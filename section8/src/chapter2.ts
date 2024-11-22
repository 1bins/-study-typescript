/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) { // Person 객체 타입으로부터 모든 프로퍼티의 키를 union타입으로 추출 -> "name" | "age"
  return person[key];
}

const person: Person = {
  name: "서원빈",
  age: 29,
}

getPropertyKey(person, "name"); // 서원빈


// typeof 를 사용해보자
type Person2 = typeof person; // person 변수의 프로퍼티값을 그대로 뽑아옴

function getPropertyKey2(person: Person2, key: keyof typeof person) { // Person 객체 타입으로부터 모든 프로퍼티의 키를 union타입으로 추출 -> "name" | "age"
  return person[key];
}