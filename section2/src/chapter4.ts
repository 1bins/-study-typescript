// ** 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "서원빈",
    nickname: "1bin",
    birth: "1996.01.25",
    bio: "안녕하세요",
    location: "광주광역시"
}

let user2: User = {
    id: 2,
    name: "김아무개",
    nickname: "none",
    birth: "1993.11.12",
    bio: "안녕하세요",
    location: "광주광역시"
}

// ** 인덱스 시그니처
// -> key와 value의 타입을 기준으로 규칙을 정할때. 예시처럼 여러개의 property를 사용하기 위해서
type CountryCodes = {
    [key: string] : string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
};

type CountryNumberCodes = {
    [key: string] : number;
    Korea: number; // 반드시 Korea property가 필요할 경우 넣어주기
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
};