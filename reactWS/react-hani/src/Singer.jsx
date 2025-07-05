
const aURL = "https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Alexander";

function Singer({sKey, name, song, delSinger}) {

  const delMe = () => {
    // 코드완성 해보기!
    // Props Drilling 부모만 할 수 있는 일 => props 전달
    delSinger(sKey);   // 부모 컴포넌트의 함수 호출
  }

  return (
    <div className="delMe" style={{border:"1px solid pink"}}>
        <img src={`${aURL}${name}`} width={150} height={150} />
        <h1>{sKey} 이름 {name}</h1>
        <h1>대표곡 {song}</h1>
        <button onClick={delMe}>나를 지워줘</button>
    </div>
  )
}

export default Singer