/**
 * 클래스
 */

let studentA = {
  name: "서원빈",
  grade: "A+",
  age: 29,
  study(){
    console.log("열심히 공부함")
  },
  introduce(){
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
  }
}

class Student {
  // 필드 - 클래스가 만들어낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자 - 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함")
  }

  introduce() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 슈퍼(부모)클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`)
  }
}

const studentDeveloper = new StudentDeveloper('서원빈', 'B+', 29, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();


let studentB = new Student("정성찬", "A+", 24);
studentB.introduce();