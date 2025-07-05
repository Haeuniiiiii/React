
function Idol({delIdol, sid, name, age}) {
    //
    const meDel = () => {
      // 삭제 버튼을 누르면 div 없어지게
        delIdol(sid);
    }

  return (
    <div className="border-4 border-pink-500 mb-4">
        <div> {sid} {name}</div>
        <div> {age}</div>
        <button onClick={meDel} className="border-4 border-blue-600">X 날 이조달라 X</button>
    </div>
  )
}

export default Idol