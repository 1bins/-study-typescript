/**
 * 인터페이스
 * 객체를 정의할때 자주 사용함
 */

interface IPerson {
  readonly name: string;
  age: number;
  city?: string;
  // 메서드에 오버로딩을 구현하려면 호출 시그니처로 구현하기
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // sayHi: () => void; 함수 시그니처
}

const person: IPerson = {
  name: "서원빈",
  age: 29,
  sayHi: function(a?: number, b?: number) {
    if(typeof a === 'number' && typeof b === 'number'){
      console.log(a + b)
    } else {
      console.log(this.name)
    }
  }
}