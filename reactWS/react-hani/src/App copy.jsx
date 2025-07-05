import { useState } from "react";
import Counter from "./Counter"

function App() {

  // sum의 값을 변경 리렌더링
  const [sum, setSum] = useState(9000);

  const sumChg = (pNum) => {
    setSum(sum + pNum);
  }

  return (
    <>
      <h1>하이 헬로우 안녕!</h1>
        {/* 함수 전달 props, 전달은 부모가 자식에게만 할 수 있음 --> 단방향 
            Vue, Anglar --> 양방향!
            그래서 이 단순한 예제는 생각보다 중요함! 
            ==> Props Drilling (다 뚫고 자식에게 가야만하는....)
        */}
      <div style={{backgroundColor:"pink", height:"2px"}}></div>
      <Counter sumChg={sumChg}/>
      <div style={{backgroundColor:"pink", height:"2px"}}></div>
      <Counter sumChg={sumChg}/>
      <div style={{backgroundColor:"pink", height:"2px"}}></div>
      <Counter sumChg={sumChg}/>
      <div style={{backgroundColor:"pink", height:"2px"}}></div>
      
      <div>
        <h1>Sum은 {sum}</h1>
      </div>
    </>
  )
}

export default App
