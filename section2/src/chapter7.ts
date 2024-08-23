// ** void
// -> 🇰🇷 공허: 아무것도 없다
// -> 아무것도 없음을 의미하는 타입
function func1(): string {
    return "hello";
}

// 반환값이 없을 때 void타입 사용
function func2(): void {
    console.log("hello");
}

// void타입으로 지정할 경우 값은 오직 undefined만 부여가 가능하다
let a: void;
a = undefined;
// a = "string"; ⚠️Error 발생


// ** never
// -> 불가능한 타입
const func3 = (): never => {
    while (true) {}
}

const func4 = (): never => {
    throw new Error();
}

// never타입은 그 어떤 값도 부여할 수 없다
let b: never;
// b = undefined; ⚠️Error 발생
// b = null;
// b = 1;
// b = "string";
// b = true;