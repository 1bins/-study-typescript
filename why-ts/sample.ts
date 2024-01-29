const sum = (a: number, b: number): number => {
    return a + b;
}
let result = sum(10, 20);

// result가 number형으로 정의되었기에 result.을 입력하면 자동으로 숫자형 API가 추천으로 뜬다.
result.toLocaleString();