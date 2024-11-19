/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필트
  public name: string;
  private age: number; // 접근이 오직 class 내에서만 가능함 => 함수 참고, 파생클래스(extends를 사용하여 확장한) 함수까지 접근 불가
  protected position: string; // private과 같은 기능, but 파생클래스 함수까지 접근가능

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 함수
  work() {
    console.log(`일함. ${this.age}`); // private 접근
  }
}

const employee = new Employee('서원빈', 29, 'developer');
employee.name = '홍길동';
// employee.age = 30;  -> 오류
// employee.position = 'designer';  -> 오류


// 접근 제어자를 생성자 매개변수에 넣게 되었을 경우
// 필드와 생성자 안의 this.name = name; -> 생략이 가능해진다
class EmployeeB {
  // 필드 -> 생략가능
  // 생성자
  constructor(
      public name: string,
      public age: number,
      public position: string
  ) {}
  
  // 함수
}