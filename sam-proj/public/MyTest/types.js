// JavaScript 관련 키워드 검색
// 👉 MDN(https://developer.mozilla.org/ko)
'use strict';

// 1. number 숫자 타입
const birthYear = 2000;
console.log(birthYear);

const weight = 75.24;
console.log(weight);

// 2. string 여러 개의 문자들
const nickname = "홍팍";
const starSign = "천칭자리";
const bloodType = "A";

// typepf를 통해 내가 사용하는 문장들이 과연 어떤 타입인지 확인!?
console.log(typeof 1234);
console.log(typeof "1234");
console.log(typeof bloodType);

// 3. boolean 참과 거짓!
console.log(typeof true);
console.log(typeof false);
const hungry = true;
console.log(hungry);

// 4. null, undefined
let dinner; // undefined, 이름표만 만들고 값을 미지정!
console.log(typeof dinner);
dinner = "🍕 피자"; // string을 변수에 연결
console.log(typeof dinner);
dinner = null; // null, 값을 연결하지 않기로 함!
console.log(typeof dinner);
