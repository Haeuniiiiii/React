function Idol({name, age}) {
    // 매개변수에 구조분해를 적용하면 간단해결!

    // 요렇게 아래처럼 하지말궁...
    // console.log("체킁", Props);
    // const name = Props.name;
    // const age = Props.age;

    return (
        // 진짜 html이 아님을 알 수 있다!
        // 여긴 스크립트가 확인하는 영역이다.
        <div className="idol">
            <h1>이름 : {name}</h1>
            <h2>나이 : {age}</h2>
        </div>
    )
}

export default Idol