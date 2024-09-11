/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
}

let person = {} as Person;
person.name = "서원빈";
person.age = 27;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: "별이",
  color: "gold",
  breed: "장모치와와"
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never; // 10은 never의 슈퍼타입
let num2 = 10 as unknown; // 10은 unknown의 서브타입

// ⛔ let num3 = 10 as string;
let num3 = 10 as unknown as string; // 10은 unknown의 서브, unknonwn은 string의 슈퍼타입 (다중단언) -> 좋은 방법은 아님..

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 객체의 value가 readonly가 되버림

// ⛔ cat.name = "돌돌이"

/**
 * Non Null 단언 (!연산자)
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "서원빈"
}

const len: number = post.author!.length; // null | undefined가 아닐거라고 전달함