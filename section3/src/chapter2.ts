/**
 * Unknown 타입
 * 전체 집합: 최상위
 * 업캐스팅은 가능/다운케스팅은 안됨
 */

function unknownExam () {
    // 업케스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // 다운케스팅 ⚠️Error 발생
    let unknownVar: unknown;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
}

/**
 * Never 타입
 * 모든 타입의 서브타입: 최하위
 * 공집합: 불가능
 * 다운캐스팅은 가능/업케스팅은 안됨
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 다운케스팅
    let num: number = neverFunc();

    // 업케스팅 ⚠️Error 발생
    // let never1: never = 10;
}

/**
 * Void 타입
 * undefined를 가질 수 있음
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }
}

/**
 * any 타입
 * 모든 업/다운캐스팅 가능
 * 타입계층도를 무시하는 치트키 타입
 * But, never 타입에는 불가
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;

    // ⚠️Error 발생
    // neverVar = anyVar;
}