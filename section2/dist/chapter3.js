// ** object
// -> 객체 리터럴 타입
let user = {
    id: 1,
    name: "서원빈",
};
// readonly -> 절대 값이 수정되어서 안되는 프로퍼티
let config = {
    apiKey: 'MY API KEY'
};
export {};
// config.apiKey = "hacked"; ⚠️Error 발생
