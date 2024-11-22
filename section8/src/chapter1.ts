/**
 * 인덱스드 엑세스 타입
 */
// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}

function printAuthorInfo (author: Post["author"]) { // { id: number; name: string; } 해야하지만 author 객체에 계속 프로퍼티가 추가될 경우 계속 수정해야함.
  console.log(`${author.name}-${author.id}`)
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "서원빈",
  }
}

// 배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}[];

const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "서원빈",
  }
}

// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];