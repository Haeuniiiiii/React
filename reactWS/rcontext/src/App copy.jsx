/* eslint-disable react-refresh/only-export-components */
import { Smile } from "lucide-react";
import { createContext, useState } from "react";
import Jaesuk from "./Jaesuk";

// Context는 여러개 생성 가능하다
export const jsContext = createContext();
export const heContext = createContext();

function App() {
  // 지금 상태로는 값을 읽기가 편하다는 사실 외에, 수정을 할 수 없어서 쓸모가 없음!

  const [jname, setJname] = useState("예빈만만세");
  return (
    <>
        <jsContext.Provider value={{jname, setJname}}>
          <heContext.Provider value={{sname:"재석", salias:"이모티콘의신"}}>
            <h1 className="text-3xl underline text-lime-500">
              <Smile color="green" size={200}/>자 이제 시작이얌
            </h1>
          <Jaesuk />
        </heContext.Provider>
      </jsContext.Provider>
    </>
  )
  
}
export default App
