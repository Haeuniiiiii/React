// 가짜 데이터
import { useRef, useState } from "react";
import Singer from "./Singer";

const singers = [
    {key: 1, name: "로제", song: "Gone"},
    {key: 2, name: "데이식스", song: "HAPPY"},
    {key: 3, name: "빅뱅", song: "거짓말"},
    {key: 4, name: "엔플라잉", song: "만년설"},
    {key: 5, name: "대한민국", song: "애국가"}
];

function SingerList() {
    // singer배열을 상태변수(Reactive 변수로 사용해야함)
    const [sname, setSname] = useState("");
    const [ssong, setSsong] = useState("");

    const [rsingers, setRsingers] = useState(singers);

    // 보이고 안 보이고 제어가 필요하다!
    const [show, setShow] = useState(false);

    // 두번째 필수 Hook useRef
    // current 속성 1개만 있는데, current가 해당 태그를 가리킴!
    // 곧 항상 current를 사용하게 됨!
    // const nameRef = useRef(초기값);
    // const songRef = useRef(초기값);
    const nameRef = useRef(null);
    const songRef = useRef(null);

    const fShowToggle = () => {
        // 이 코드는 나중에 강제 Re-Rendering 코드로 사용해도 됨!
        setShow(!show); // 그저 원래 값 반전만 하면 됨!
    }

    const sAdd = () => {
        // console.log("체킁", nameRef);
        // console.log("체킁", nameRef.current);

        const name = nameRef.current.value;
        const song = songRef.current.value;
        const newSinger = {
            key:Math.ceil(Math.random()*10000), // 그냥 마구마구...
            name:sname,
            song:ssong
        }

        const newSingers = [newSinger, ...rsingers]; // [] => new Array()임을 잊지 말장!
        setRsingers(newSingers);
        setSname("");
        setSsong("");
        singers.push(newSinger);

        // nameRef.current.value="";
        // songRef.current.value="";
        // nameRef.current.focus(); // 커서주기!

        // rsingers.push(newSinger);   // Re-Rendering 발생??! 놉!
        // setRsingers(rsingers);      // Re-Rendering 발생??! 놉!
        // setRsingers([...rsingers]); // Re-Rendering 발생!
    }

    const sSch = () => {
        const name = nameRef.current.value;
        const newSingers = rsingers.filter(singer => singer.name == name);
        setRsingers(newSingers);   
    }


    const sReset = () => {
        // 배열을 원래대로 돌려주기
        setRsingers([...singers]);
    }

    const chgName = (e) => {
        console.log(e.target.value);
        setSname(e.target.value);
    }
    
    const chgSong = (e) => {
        console.log(e.target.value);
        setSsong(e.target.value);
    }

    // 생각은 추상적으로 크게 크게 코드 짤때는 논리적으로 세세하게
    const delSinger = (pKey) => {
        console.log(pKey)
        const newSingers = rsingers.filter(singer => singer.key != pKey);
        setRsingers(newSingers);
    }

  return (
    <div>
        <div style={{display:`${show ? "block" : "none"}`}}>
            {/* 가수명 <input type="text" ref={nameRef} defaultValue={"지디"}/><br/>
            대표곡 <input type="text" ref={songRef} defaultValue={"홈스윗홈"}/><br/> */}

            가수명 <input type="text" value={sname} onChange={chgName}/><br/>
            대표곡 <input type="text" value={ssong} onChange={chgSong}/><br/>

            <button onClick={sAdd}>등록</button><br/>
            <button onClick={sSch}>검색</button><br/>
            <button onClick={sReset}>리셋</button>
        </div>
        <button onClick={fShowToggle}>가수 추가(토글)</button><br/><br/>
        {
            rsingers.map(singer => <Singer delSinger={delSinger}  sKey={singer.key} key={singer.key} name={singer.name} song={singer.song} />)
        }     
    </div>
  )
}

export default SingerList