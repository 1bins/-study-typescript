// TS 문자
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

// TS 튜플 -> 배열에 순서 타입까지 넣을 수 있음
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 50,
};
// key의 value 타입까지 지정이 가능함
let person2: {name: string, age: number} = {
    name: 'capt',
    age: 50,
};

// TS 진위값
let show: boolean = true;