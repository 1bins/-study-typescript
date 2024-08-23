// ** 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "wonbinseo"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// ** 튜플
// -> 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
// 튜플 타입을 사용하는 이유 -> 배열의 순서를 지키는데 필요함(협업 시)
const users = [
    ["서원빈", 1],
    ["김아무개", 2],
    ["이아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"] ⚠️Error 발생
];
export {};
