import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Idol from "./Idol";


const API_URL = "http://localhost:8080/api";
function App() {
  // 실제 ajax 성공 데이터를 나중에 다시 뿌려야 함 => 곧 ReRendering이 필요
  // ReRendering 하면 상태 변수가 머리에 떠오름
  const [idols,setIdols] = useState([]);

  const [get, setGet] = useState(false);  // 괜히 dependency 용

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const sidRef = useRef(null);

  useEffect(()=>{
       // 실행중! (Promise 비동기 )
      axios.get(`${API_URL}/idols`).then(resp=>{
        console.log("체킁:",resp.data);
        setIdols(resp.data); // Re-Rendering 
      })
  },[get]);


  const newReg = (e)=>{

    e.preventDefault(); // ㅠㅠ

    const name = nameRef.current.value;
    const age = ageRef.current.value;

    const nIdol = {sid:(Math.ceil(Math.random()*100)), name, age};

    axios.post(`${API_URL}/idols`, nIdol).then(() => {
      
      setGet(!get);
      
      // axios.post(`${API_URL}/idols`, nIdol).then(resp => {
      // let idol = resp.data;
      // 이전에 했던 방식, 되긴 하지만 상황적으로는 혼자만 즐기는 방식 (+좋은 방법은 아니다)
      // const newIdols = [idol, ...idols]; // 새 배열 생성
      // setIdols(newIdols);
    })
  }


  const schIdol = () => {
    // 검색해봅시당
    const sid = sidRef.current.value;
    axios.get(`${API_URL}/idols/${sid}`).then(resp => {
      const schIdols = [resp.data]; // 새 배열 생성
      setIdols(schIdols);
    })
  }

  // 지우는 함수
  const delIdol = (pSid) => {
    axios.delete(`${API_URL}/idols/${pSid}`).then(() => {
      setGet(!get); // list 재호출 되도록
      // 서버 쪽에서 지우고 서버에 리스트 다시 달라
    })
  }


  return (
    <>
      <h1 className="text-3xl">이제 넘 중요한 useEffect</h1>
      <div>
          <form >
            SID <input className="border-1" type="text" ref={sidRef} defaultValue={""} required /><br />
            이름 <input className="border-1" type="text" ref={nameRef} defaultValue={""} required /><br />
            나이 <input className="border-1" type="text" ref={ageRef}  defaultValue={""} required /><br />
            <button type="submit" className="border-2 bg-amber-200" onClick={newReg}>새 아이돌 등록</button>
            <button type="button" className="border-2 bg-green-400" onClick={schIdol}>아이돌검색</button>
        </form>
      </div>
      {
        idols.length?
        idols.map(idol => 
            <Idol delIdol={delIdol} key={idol.sid} sid={idol.sid} name={idol.name} age={idol.age} />)
        : <div className="text-8xl">아이돌이 없넹</div>
      }
    </>
  )
}

export default App
