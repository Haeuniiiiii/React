import { useContext, useEffect, useRef, useState } from "react";
import { idolContext } from "./idolContext";
import axios from "axios";

const API_URL = "http://localhost:8080/api";

// 아주 무리해서 덩어리 통째로 해보자 (좋은 방법아님)
export function useTotal() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(20);
    const [flag, setFlag] = useState(false);
    const sidRef = useRef();
    
    const {idols, idolsDispatch} = useContext(idolContext);
    // 커스텀 hook
    // const {idols, idolsDispatch} = useJy();

    // 사이드 이펙트
    useEffect(() => {
        axios.get(`${API_URL}/idols`).then(resp => {
            // console.log("체킁: ",resp.data); // 항상 값을 확인하는 습관이 디버깅 고수를 만듬!
            // 가져온 데이터를 가지고 Re=Rendering 을 하려면 dispatch
            idolsDispatch({
                // action으로 넘어간다..
                type:"getIdols",
                payload:resp.data
            });
        })
    },[flag])

    const nameChg = (e) => {
        setName(e.target.value);
    }
    
    const ageChg = (e) => {
        setAge(e.target.value);
    }

    const addIdol = (e) => {
        e.preventDefault(); // submit 막깅!
        const newIdol = {
            sid:Math.ceil(Math.random()*10000)
            ,name:name
            ,age:age
        }
        axios.post(
            `${API_URL}/idols`
            ,newIdol
        ).then(() => {
            // 지금 상황은 dispatch 를 할 필요가 없음
            setFlag(!flag); // 그저 계속 뒤집기
        })
    }

    // 수정버튼을 누르면 이름과 나이가 변경되도록 
    const modIdol = () => {
        const mIdol = {
            sid:sidRef.current.value
            ,name:name
            ,age:age
        }
        axios.put(
            `${API_URL}/idols`
            ,mIdol
        ).then(() => {
            console.log("체킁: ",mIdol); // 항상 값을 확인하는 습관이 디버깅 고수를 만듬!
            // 지금 상황은 dispatch 를할 필요가 없음
            setFlag(!flag); // 그저 계속 뒤집기 => List 다시 가져오기 => useEffect 안에 내용 실행
        });
    };

    // jsx에서 사용하는 것만 return 으로 내보내줌!
    return {addIdol, idols, sidRef, name, nameChg, age, ageChg, modIdol};

}

