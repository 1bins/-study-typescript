/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2); // T:string, U: number

/**
 * 두번째 사례
 * T[], [T, ...unknown[]]
 */
function returnFirstValue<T>(data: T[]): T {
  return data[1];
}

let num = returnFirstValue([0 ,1 ,2]);
let str = returnFirstValue(["hello", "my", "name"]);

/**
 * 세번째 사례
 * T라는 타입은 length: number를 가지고 있는 프로퍼티를 확장
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
let var4 = getLength(10);