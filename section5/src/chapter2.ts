/**
 * 인터페이스 선언 합침
 * 인터페이스는 동일한 이름으로 중복선언이 가능함 -> 프로퍼티가 합쳐진다.
 * type 별칭은 중복선언 불가능함.
 */

interface Person {
  name: string;
}

interface Person {
  // name: number; -> 똑같은 프로퍼티의 다른 타입은 선언 불가, 서브타입 조차 불가능함.
  age: number;
}

const person: Person = {
  name: "",
  age: 29,
}

/**
 * 모듈 보강
 * 라이브러리 파일에서 부실한 내용 추가
 */

// library
interface Lib {
  a: number;
  b: number;
}

// add
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 25,
  b: 35,
  c: ""
}