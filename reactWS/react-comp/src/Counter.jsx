import { useState } from 'react'
function Counter() {    

    console.log("체킁킁냄새가나")
// Rerendering(다시그리기) => 이거 잘 이해하고 써야됨

// 상태관리 (곧 전역변수 관리)
// const [cnt, setCnt] = useState(100); // 두번쨰 함수는 관례적으로 set대문자 변수명
// 여기서 중요한게 count 값은 오직 setCount 함수를 이용해서 바꿔야만 Re-Rendering이 일어남


const [haeun, setHaeun] = useState({age:10, name:"하은만만세"})
// console.log("다시한번 체킁킁", haeun.age)

// let cnt = 1;

// 우리끼리의 규칙, function 안에 함수는 화살표 함수로...
const inc = () => {
    // setCnt(age + 1);

    // let he2 = haeun;
    // he2.age = 300;
    // alert(he2 == haeun)
    // haeun.age = 200;

    
    console.log("체킁킁", haeun)
        setHaeun({...haeun}) // re-rendering은 값이 바뀌었을 때만

        // cnt++;
        // alert(cnt);
        // document,querySelector('#is').innerHTML = cnt
    }

    return (
        <div>
            <span id="is">{haeun.name}은 {haeun.age}살</span>
            <br />
            <button onClick={inc}> + </button>
        </div>
    )
}

export default Counter