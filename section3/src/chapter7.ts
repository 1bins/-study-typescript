/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
}

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person: name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number"){
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // value가 Date 객체인지 확인 || Date는 자바스크립트의 클래스. instaceof 사용가능
    console.log(value.getTime());
  } else if (value && "age" in value) { // value라는 값에 age 프로퍼티가 있는지 확인
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
