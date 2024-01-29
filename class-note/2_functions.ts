// 함수의 파라미터에 타입을 정의하는 방식
const sum = (a: number, b: number) => a + b;
sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
const sum2 = (): number => 10;

// 함수에 타입을 정의하는 방식
const sum3 = (a: number, b: number): number => a + b;
sum3(10, 20);

// 함수의 옵셔널(선택적) 파라미터 -> ?를 넣음으로써 인자를 굳이 안 써도 된다는 것을 정의함
const log = (a: string, b?: string, c?: string) => {

}
log('hello world');