// 숫자형 이넘
enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 0 => 아무런 값을 지정하지 않았기 때문에 위에서부터 순차적으로 0, 1, 2... 값을 지정하면 아래는 +1씩

// 문자형 이넘
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 나이키

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

// 드롭다운 등의 어떤 목록이 필요한 형태에서 이넘을 정해서 쓰는데