/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react"
import Juyoung from "./Juyoung";

// context 생성
export const yhContext = createContext();
export const setContext = createContext();

const yhInfo = {
  name:"영하",
  alias:"열심"
}

// 중괄호 key:value가 같을 때는 생략 가능 {idol:idol, setIdol:setIdol} {idol, setIdol}
function App() {

  // const idol = useState(yhInfo);
  // const setIdol = useState(setContext);

  const [idol, setIdol] = useState(yhInfo);

  return (
    <>
      {/* <yhContext.Provider value={{idol:idol, setIdol:setIdol}}> */}
      <yhContext.Provider value={idol}>
        <setContext.Provider value={setIdol}>
          <h1>자 이제 시작이야!</h1>
          <Juyoung />
        </setContext.Provider>
      </yhContext.Provider>
    </>
  )
}

export default App
