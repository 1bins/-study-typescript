/**
 * 프로미스
 */
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~~ 때문에 실패");
  }, 3000)
});

promise.then((response) => { // response는 resolve안에 있는 매개변수
  console.log(response * 10);
})

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => { //<Post>도 사용가능
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠"
      })
    })
  })
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
})