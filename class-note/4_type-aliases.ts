// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

let seho: Person = {
    name: '세호',
    age: 30,
}

type MyString = string;
let str: MyString = 'hello';

type Todo = { id: number, title: string, done: boolean };
function getTodo(todo: Todo){

}


// 인터페이스와 타입의 차이
https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD%EC%9D%98-%ED%8A%B9%EC%A7%95