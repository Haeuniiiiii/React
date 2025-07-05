import { useState } from 'react'

function Counter() {

    console.log("이게 보이면 cnt 함수를 실행하는 거라궁!");

    const [cnt, setCnt] = useState(3000);

    const finc = () => {
        setCnt(cnt + 1);
    }
    const fdec = () => {
        setCnt(oldVal => oldVal - 1);
    }
    
    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={finc}> + </button>
            <button onClick={fdec}> - </button>
        </div>
    )
}

export default Counter