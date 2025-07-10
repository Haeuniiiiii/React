import { useTotal } from "./cusHook";
import Idol from "./Idol";

function IdolList() {

    // 무리하게 해본 커스텀 훅 예제
    // 원리는 간단! jsx 에서 필요한 것만 return 으로 꺼내주면 됨
    // 실제로 리펙토딩 정리할때는 생각할 시간을 가지고, 유지보수가 잘 될 수 있도록
    // 주석도 열씨미 달아서 제공해야함!
    const {addIdol, idols, sidRef, name, nameChg, age, ageChg, modIdol} = useTotal();
    // console.log(idols)

    return (
        <>
            <div>
                <form onSubmit={addIdol}>
                    SID <input type="text" ref={sidRef} defaultValue={""} /><br/>
                    이름 <input type="text" value={name} onChange={nameChg} /><br/>
                    나이 <input type="number" value={age} onChange={ageChg} /><br/>
                    <button type="submit">추가등록</button>
                    <button type="button" onClick={modIdol}>수정</button>
                </form>
            </div>
            <div>
                {
                    idols.length == 0 ? <h1>아이돌 없엉</h1> 
                    : idols.map((idol) => {
                        return <Idol key={idol.sid} sid={idol.sid} name={idol.name} age={idol.age} />
                    })
                }

            </div>
        </>
    )
}

export default IdolList