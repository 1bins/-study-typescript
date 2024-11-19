/**
 * 인터페이스와 클래스
 */

interface ICharacter {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Chracter implements ICharacter {

  constructor(
      public name: string,  // 인터페이스로 정의한 설계도는 무조건 public만 가능함
      public moveSpeed: number
  ) {}

  move(){
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}