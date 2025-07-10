import React from "react";

function App() {

  // 1️⃣ useState: 상태값 선언 (숫자, 문자열 등)
  const [counter, setCounter] = React.useState(0);
  const [name, setName] = React.useState("홍길동");

  // 2️⃣ useRef: DOM 요소나 변경 가능한 값을 참조할 때 사용
  const inputRef = React.useRef();

  // 숫자 증가 함수
  const cntUp = () => {
    setCounter(counter + 1);
  };

  // 이름 변경 함수 (input에서 값을 가져와서 변경)
  const nmChg = () => {
    setName(inputRef.current.value);  // useRef를 통해 DOM 요소 접근
  };

  // 3️⃣ useEffect: 특정 값이 바뀔 때마다 실행됨 (의존성 배열로 조건 설정)
  React.useEffect(() => {
    console.log("🔢 숫자올리기 useEffect 실행!");
  }, [counter]); // counter 값이 바뀔 때만 실행됨

  React.useEffect(() => {
    console.log("👤 이름바꾸기 useEffect 실행!");
  }, [name]); // name 값이 바뀔 때만 실행됨

  // 4️⃣ useMemo: 연산 결과를 캐싱해서 성능 최적화
  const doubleCounter = React.useMemo(() => {
    console.log("🧠 doubleCounter 계산중...");
    return counter * 2;
  }, [counter]); // counter가 바뀔 때만 재계산됨

  // 5️⃣ useCallback: 함수를 캐싱하여 불필요한 재렌더링 방지
  const sayHello = React.useCallback(() => {
    console.log(`안녕하세요, ${name}님!`);
  }, [name]); // name이 바뀔 때만 새로 생성됨

  return (
    <>
      <div className="App">
        {/* 카운터 출력 및 증가 버튼 */}
        <div style={{ fontSize: 30 }}>
          CountUp: {counter}
        </div>
        <button onClick={cntUp}>Count UP!!</button>

        <hr />

        {/* 이름 변경 기능 */}
        <div style={{ fontSize: 30 }}>
          이름: {name}
        </div>
        <input type="text" ref={inputRef} placeholder="이름을 입력하세요" />
        <button onClick={nmChg}>이름 변경</button>

        <hr />

        {/* useMemo로 계산된 값 출력 */}
        <div style={{ fontSize: 20 }}>
          (Memoized) 더블 카운트: {doubleCounter}
        </div>

        {/* useCallback 테스트 버튼 */}
        <button onClick={sayHello}>인사하기</button>
      </div>
    </>
  );
}

export default App;
