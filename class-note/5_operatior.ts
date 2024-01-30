// function logMessage(value: any) {
//     console.log(value)
// }
// logMessage('hello');

// | 연산자 유니온 Type: 하나의 타입 이상을 쓸 수 있게 해줌
let seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    someone.name // name만 선택이 되는 이유: Developer와 Person의 공통 속성만 가져온다
}

// & 인터섹션 Type: 설정한 모든 타입을 만족하는 타입
let capt: string & number & boolean; // never => 세 속성을 절대 가질 수 없음
function askSomeone2(someone: Developer & Person) { // Developer, Person이 가지고 있는 모든 속성값을 가져옴
    someone.name;
    someone.age;
    someone.skill;
}

// 유니온 호출 => Developer 또는 Person의 속성만 넘기면 됨
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 50 });

// 인터섹션 호출 => Developer와 Person의 속성 모두를 넘겨야함
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 50 });