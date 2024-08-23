// ** any
// -> 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = () => {};

// anyVar.toUpperCase(); ⚠️ tsx 실행 시 오류 발생(Runtime Error)

let num: number = 10;
num = anyVar;

// ** unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any타입과의 차이점
// -> 어느 값에도 할당 할 수 없고, 함수 실행이 불가능함
// unknownVar.toUpperCase(); ⚠️Error 발생
// num = unknownVar; ⚠️Error 발생