// contextProvider 리팩토링, 소스가 심플하게 보이도록
import { useReducer } from "react";
import { idolContext, idolReducer } from "./idolContext"

function IdolProvider({children}) {
    const [idols, idolsDispatch] = useReducer(idolReducer, []);
    return (
        <idolContext.Provider value={{idols, idolsDispatch}}>
            {children}
        </idolContext.Provider>
    )
}

export default IdolProvider