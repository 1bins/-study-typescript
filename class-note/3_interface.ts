interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
const getUser = (user: User) => {
    console.log(user);
}
const capt = {
    age: 50,
    name: '캡틴',
}
getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}
let sum: SumFunction;
sum = (a: number, b: number): number => a + b;


// 인덱싱
interface StringArray {
    [index: number]: string;    // 배열 안에 들어있는 모든 값은 string이다
}
let arr:StringArray = ['a', 'b', 'c'];
// arr[0] = 10; //string에 어긋나므로 빨간 줄


// 딕셔너리 패턴 -> Regex: 정규표현식
interface StringRegexDictionary {
    [key: string]: RegExp
}
let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
Object.keys(obj).forEach((keys) => {})


// 인터페이스 확장 -> 기존에 있던 값을 새 인터페이스에 추가할 때
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {    // *
    language: string;
}
let captain: Developer = {
    name: "capt",
    age: 50,
    language: "ts"
}