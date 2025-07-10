/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import IdolList from "./IdolList";

export const idolContext = createContext();

// 그냥 데이터 창고 하나 만든다고 생각 
// 수출을 위해 export
export const yujinContext = createContext();

// 이건 개발자가 만들어 주어야함
// const idolReducer = (상태, action(==dispatch) ) => {
const idolReducer = (idols, action) => {

  switch (action.type) {
    case "getIdols":{
        return [...action.payload]; 
    }
  
    default:
      throw new Error("그런 케이스는 없는딩!");
  }
}


// 형태가 정해져있당. useReducer를 쓰려면 이걸 받아들여야함. 
// const yReducer = ( 상태변수, action ) => {
const yReducer = ( yName, action ) => {
  switch (action.type) {
    // case "원하는 명령어 문자열": {
    case "change": {
      return action.data; //yName과 같은 데이터 형태를 return 해야함
        // name:"유진",alias:"조폭"
        // Re-Rendering 일어난다
        // yName 과 같은 데이터 형태를 return 해야함!(케바케)
    }
  
    default:
      // 예외가 발생했다 디폴트
      // break는 명령 멈추기
      // throw는 예외상황이 발생했다는 것을 던지기
      throw new Error("이런 경우가 있었낭?");
  }
}

function App() {
  const [idols, idolsDispatch] = useReducer(idolReducer, []);
  const [yName, yNameDispatch] = useReducer(yReducer, {name:"유진",alias:"조폭"});
  
  return (
    <>
      <idolContext.Provider value={{ idols, idolsDispatch }}>
        {/* <yujinContext.Provider value={{상태변수, 변수값을 바꿀 수 있는 함수}}> */}
        <yujinContext.Provider value={{yName, yNameDispatch}}>
          <h3>창고입니다 데이터를 담는 창고..</h3>
          <h3>Provider에 둘러싸여 있어서 나는 나올 수 있다</h3>
          <IdolList />
        </yujinContext.Provider>
      </idolContext.Provider>
    </>
  )
}

export default App
