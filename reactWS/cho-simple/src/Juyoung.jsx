import { useRef, useState } from 'react';
import { setContext, yhContext } from './App';

function Juyoung() {
    // useContext HOOK 함수는 Provider의 value에 세팅한 값을 return 해준다
    // const [ idol, setIdol ] = useContext(yhContext);
    // 배열로 하면 value 값의 이름을 마음대로 정할 수 있다.
    // 하지만 순서를 정확히 알고 있어야 index로 접근가능하다
    // 장단점이 있다!
    const idol = useState(yhContext);
    const setIdol = useState(setContext);

    // const { name , alias } = idol;
    // 원시타입이 아니면 새박스를 줘야한다! 

    const nameRef = useRef();
    const aliasRef = useRef();

    const nameChg = () => {
        const nameVal = nameRef.current.value;
        const aliasVal = aliasRef.current.value;
        console.log("체킁",nameVal);    // 항상 이상하면 눈을 확인하는 습관!
        // 새 박스를 주자
        // setIdol({
        //     name:nameVal,
        //     alias:aliasVal
        // });
        // 수정할 때 많이 사용되는 방식 앞에 ... 전개 연산자로 기존값 그대로 기술하고
        // 그 뒤에 수정하고 싶은 속성:값 나열, 새 속성 추가 때도 이런 식으로 많이 사용
        setIdol({...idol, name:nameVal, alias:aliasVal});
    }

    return (
        <>
        <div>
            이름 <input type="text" ref={nameRef} defaultValue={"기본value설정"} /><br/>
            별명 <input type="text" ref={aliasRef} defaultValue={"기본value설정"} />
            <button onClick={nameChg}>체인징</button>
        </div>
            <div style={{backgroundColor:"pink"}}>
                <h1>이름 : {idol.name}</h1>
                <h2>별명 : {idol.alias}</h2>
            </div>
        </>
    )
}

export default Juyoung