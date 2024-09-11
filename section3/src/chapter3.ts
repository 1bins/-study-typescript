/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: '기린',
  color: "yellow"
}

let dog: Dog = {
  name: '별이',
  color: 'gold',
  breed: '장모치와와'
}

animal = dog;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: "reactjs"
}

/**
 * 초과 프로퍼티 검사
 */

type Book = {
  name: string;
  price: number;
}

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: "reactjs"
}
