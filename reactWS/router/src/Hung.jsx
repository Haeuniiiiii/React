import { useNavigate } from "react-router";

function Hung() {
    // 관례적으로 navigate 라고 명시한다. (하나로 모두 커버하기 때문에 이름을 새로지을 필요없다)
    // hook 제약사항, 함수 컴포넌트 최상위에 있어야함
    // 내부 함수나 if문 반복문 속에 있으면 안됨
    const navigate = useNavigate(); // 얘를 쓰면 함수를 되돌려준다.
    
    const hrefMove = (pNum, pName) => {
        // 원래 자바스크립트에서는 location.href(XXXXXX)
        // 동적 URL이동
        // navigate(`/sh/${pNum}/${pName}?girl=소희`);

        // 쓸데없이 많은 데이터를 넘기고 싶을 땡!
        navigate(`/sh/${pNum}/${pName}?girl=소희`, 
            {state:{
            names:["메롱", "흥", "칫", "핑"]
            }});
    }

    return (
        <div>
            <h1>찐형</h1>
            <button onClick={ () => {hrefMove(1, "하은")} }>소희로 이동1</button>
            <button onClick={ () => {hrefMove(2, "욱진")} }>소희로 이동2</button>
            <button onClick={ () => {hrefMove(3, "진영")} }>소희로 이동3</button>
        </div>
    )
}

export default Hung