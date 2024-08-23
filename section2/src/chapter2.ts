// ** Array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "wonbinseo"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// ** tuple
// -> 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플 타입을 사용하는 이유 -> 배열의 순서를 지키는데 필요함(협업 시)
const users: [string, number][] = [
    ["서원빈", 1],
    ["김아무개", 2],
    ["이아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"] ⚠️Error 발생
];