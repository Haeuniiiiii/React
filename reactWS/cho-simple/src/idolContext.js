// 리펙토링에 의해 소스가 분리
// 목적은 성능과 가독성!
import { createContext } from "react";

export const idolContext = createContext();

// 이건 개발자가 만들어 주어야함
// const idolReducer = (상태, action(==dispatch) ) => {
export const idolReducer = (idols, action) => {

    switch (action.type) {
        case "getIdols":{
            return [...action.payload]; 
    }
    
    default:
        throw new Error("그런 케이스는 없는딩!");
    }
}

// 커스텀 HOOK 사용자가 만드는 HOOK
// 이름은 use 로 시작해야함
// 함수 안에는 제공되는 HOOK이 사용되어야함
export const useJy = () => {
    return useContext(idolContext);
} 