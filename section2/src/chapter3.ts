// ** object
// -> 객체 리터럴 타입
let user: {
    id?: number; // ?의 의미는 이 property가 선택적(optional)이다.
    name: string;
} = {
    id: 1,
    name: "서원빈",
};

// readonly -> 절대 값이 수정되어서 안되는 프로퍼티
let config: {
    readonly apiKey: string; 
} = {
    apiKey: 'MY API KEY'
}

// config.apiKey = "hacked"; ⚠️Error 발생