/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key] // 대괄호[]안에는 객체의 프로퍼티의 key가 무엇이 될지 정의 / User[id | name | age], 좌항 우항 key는 동일한 것임
}

type BooleanUser = {
  [key in keyof User]: boolean;
}

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "서원빈",
    age: 29
  }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  age: 25
})