import React, { useContext } from 'react'
import { heContext, jsContext } from './App'

function Jaesuk() {

    // 세팅해서 사용하려면 정해놓기
    // 구조분해 사용하려면 받는 타입과 사용할 타입을 맞춰야해서 {} = {} 형태로 작성한 것이다
    const { jname, setJname } = useContext (jsContext);              // 최종적으로는 useContext만 잘 쓰면 됨
    const { sname, salias } = useContext(heContext);    // { sname: , salias: } 이런 형태로 되돌려준다

    console.log("체킁킁", sname, salias);

    const chgName = (pMsg) => {
        setJname(pMsg);
    }

    return (
        <>
            <div>
                재석 {jname} {sname} {salias}
            </div>
            <button className="border-amber-300 border-2" onClick={()=>{chgName("예빈메롱")}}>눌러방버튼</button>
        </>
    )
}

export default Jaesuk