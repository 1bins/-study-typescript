/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입 정의
 */
const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "서원빈", age: number, tall?: number) { // 선택적 매개변수는 필수 매개변수 뒤에 위치해야함
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("서원빈", 173);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach(numb => sum += numb);
  return sum;
}
