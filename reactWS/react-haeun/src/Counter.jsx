import { useRef, useReducer } from 'react';

// const reducer = (count, action) => {
//     console.log("체킁", count, action);

// 방법 1 . if문을 사용
// if(action.type == "add") {
    //     return count + 1;   // 증가된 값은 다음 Re-Renderring에 반영이 됨
    // }
    
    // if(action.type == "min") {
        //     return count - 1;
        // }
        
        
const reducer = (jy, action) => {
    console.log("체킁", jy, action);
    // 방법 2 . switch문을 사용
    // 경우의 수가 많은 경우, 스위치를 사용하자!
    switch (action.type) {
        // case "add": {
        case "addAge": {
            // return count + 1;
            // return {name:"진영", age:jy.age + 1};
            return {...jy, age:jy.age + 1}; // 전개연산자
        }
        // case "min": {
        case "minAge": {
            // return count - 1;
            // return {name:"진영", age:jy.age - 1};
            return {...jy, age:jy.age - 1};
        }

        case "nameChg": {
            // return {name:"유진", age:jy.age};
            return {...jy, name:action.payload.name};
        }
    
        default:
            throw new Error("머냥 넌!, 없는 경우당!");
    }
}


function Counter() {
    // 처음보면 엄청 낯설어함.. 별거 없음! 상태 관리를 위해 씀.. 
    // 곧 useState와 같은데 조금 더 경우의 처리를 쉽게 할 수 있게 되어있음.
    const txtRef = useRef(null);

    // 일반값(Re-Rendering을 일으키지 않음)을 저장하는데도 useRef를 활용할 수 있음
    const myName = useRef("욱씬욱씬");

    // const [count, dispatch] = useReducer(reducer, 0);
    const [jy, dispatch] = useReducer(reducer, {name:"진영", age:25});
    // 설계가 이미 되어있어서 필요한 것만 꽂아주면 된다.
    const addCount = () => {
        dispatch({type:"addAge"});
    }

    const minCount = () => {
        dispatch({type:"minAge"});
    }

    const chgName = () => {
        // text Box 안에 있는 값으로 이름이 바뀌게 해보자
        // 명령만 있으면 될 때도 있지만 명령 처리를 위한 데이터가 추가적으로 필요할 수도 있음!
        // 자유롭게 구성~!
        const inputName = txtRef.current.value;
        dispatch({type:"nameChg", payload:{name:inputName}});
    }

    return (
        <div className='border-amber-300 border-4 w-[350px] h-[250px] text-center text-2xl'>
            {/* <h1 className='mb-3 mt-5'>{count}</h1> */}
            <div className='text-3xl'>{myName.current}</div>
            <h1 className='mt-4'>{jy.name}</h1>
            <h1>{jy.age}</h1>
            <input className="border-2" ref={txtRef} type="text" defaultValue={"유진짱"}/><br />
            <button onClick={addCount} className='mt-2 mr-2'>&nbsp;나이 +&nbsp;</button>
            <button onClick={minCount}>&nbsp;나이 -&nbsp;</button><br />
            <button onClick={chgName} className='mt-2'>이름을유진으로변경</button>
        </div>
    )
}

export default Counter