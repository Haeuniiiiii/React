import React from 'react'

const aUrl = "https://api.dicebear.com/9.x/adventurer/svg?seed=";
// 매개변수에 구조분해 할당 적용! 코드가 심플해졌다~
function Friend({name, alias}) {
    return (
        // 리턴문 안쪽이 결국 JSX 인것. JSON문자로 데이터 출력
        // HTML 적용
        <div>
            <img src={`${aUrl}${name}`} width={100} height={100} alt="아바탕" />
            {/* <img src={aUrl + name} alt="아바탕" /> */}
            <div>이름 : {name}</div>
            <div>별명 : {alias}</div>
            <hr style={{color: "pink"}} />
        </div>
    )
}

export default Friend