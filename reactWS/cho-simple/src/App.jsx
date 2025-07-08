import { createContext, useReducer } from "react"

const idolContext = createContext();

// 이건 개발자가 만들어 주어야함
// const idolReducer = (상태, action(==dispatch) ) => {
const idolReducer = (idols, action) => {

  switch (action.type) {
    case "merong":{
        return idols; // 임시
    }
  
    default:
      throw new Error("그런 케이스는 없는딩!");
      break;
  }
}

function App() {
  const [idols, idolDispatch] = useReducer(idolReducer, []);
  
  return (
    <>
      <idolContext.Provider value={idols,idolDispatch}>
        <h1>예빈 아이돌스</h1>
      </idolContext.Provider>
    </>
  )
}

export default App
