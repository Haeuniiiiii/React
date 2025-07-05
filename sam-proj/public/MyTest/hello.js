// 1. 버튼 가져오기
const btn = document.querySelector("button");

// 2. 버튼 클릭 시, 특정 동작 수행을 지정
btn.addEventListener("click", insaBtn);

// 3. 특정 동작 내용
const heading = document.querySelector("h1");
function insaBtn() {
    // console.log("이상한 버튼");
    const mbti = prompt("MBTI?");

    if(mbti != "") {
        heading.append("어펜트한 문자 " + mbti)
    } else {
        return;
    }
}   