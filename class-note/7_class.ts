class Person {
    // ts에서는 속성값을 정의해야함
    private name: string;   // 클래스 안에서만 해당 변수를 사용하겠다
    public age: number;
    readonly log: string;   // 접근만 가능하고 값을 변경할 수 없다

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}