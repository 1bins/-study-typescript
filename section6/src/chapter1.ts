/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "서원빈",
  age: 29,
  position: "developer",
  work() {
    console.log("일함")
  }
}

class Employee {
  // 필트
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 함수
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필트
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("서원빈", 29, "developer");