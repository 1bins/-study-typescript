function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 50);

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

let seho = new Person('세호', 30);
console.log(seho);   // Person {name: "세호", age: 30}
