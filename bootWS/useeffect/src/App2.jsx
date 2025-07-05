// useEffect 를 sideEffect 라고 부름
// 비동기 처리 블록을 만들기 위해서
import { useEffect, useState } from "react";
function App2() {

  const [toggle, setToggle] = useState(false);

  useEffect( () => {
    console.log("useEffect체킁", toggle)

    // 의존하는 것을 이 안에서 바꾸면 재귀호출이 되어서 무한 루프에 빠지게 된다.
    // 초보자들이 하는 실수! 
    // setToggle(!toggle);

    return () => {
      // unmount 시에 실행될 함수
      console.log("난 unmount 될 때 실행될 함수야!");
    }


  },[toggle]);

  // 강제 리렌더링
  const fToggle = () => {
    setToggle(!toggle); // 상태변수값 변경으로 강제 리렌더링 유발!
  }


  return (
    <>
      <h1 className="text-3xl font-bold bg-pink-300">이제는 넘 중요한 useEffect</h1>
      <div className="bg-amber-100">
        설계가 되서 나왔기 때문에, 동작을 잘 알아야한다! <br />
        useEffect 를 sideEffect <br />
        비동기 처리 블록을 만들기 위해서 <br />
        동작 파악이 중요하다. 파악만 되면, 잘 활용할 수 있을 것이다! <br />
        두번째 매개변수가 dependency (의존성) 이라고 불림 <br />
        dependency가 []가 딱 한번만 실행됨. (첫번째 랜더링때)
        [] 안에 무언가 적으면 그게 바뀔 때마다 실행된다! <br />
        위에 적은 건 무조건 외워야한다!!!!!!!!!!
        <br />
        <br />
        함수 리턴, unmount 될 때 실행시키고 싶은 내용을 담아서 이용해야함
        일반적으로 쉽게 볼 수는 없는데, 아주 가끔 오동작이 의심스러운 코드가 있다면?
        초기화 루틴을 담은 함수를 만들어 줌!
        clearTimeout이 들어간 코드를 아~~~주 가끔 볼 수 있음
        <br />
        <br />


      </div>

      <button onClick={fToggle} 
              className="border-emerald-600 border-2 cursor-pointer hover:bg-amber-200">
              토글버튼(console을 보세요)
      </button>
    </>
  )
}

export default App2
2
