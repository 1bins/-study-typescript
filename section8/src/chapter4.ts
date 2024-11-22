/**
 * 템플릿 리터럴 타입
 * 타입 두가지를 조합할 수 있음
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// const ColoredAnimal: ColoredAnimal = "black-dog"; 자동으로 추천