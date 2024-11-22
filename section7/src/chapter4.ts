/**
 * 제네릭 클래스
 * 제네릭 인터페이스나 제네릭 타입변수와는 다르게 <number> <- 반드시 타입 명시할 필요 없음
 */
class List<T> {
  constructor(
    private list: T[]
  ){}

  push(data: T) {
    this.list.push(data)
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["서", "원", "빈"]);
stringList.pop();
stringList.push("반");
stringList.print();