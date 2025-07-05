import Start from "./Start"
import Mudo from "./Mudo"

const myMudo = [
  {name:"명수", age:20},
  {name:"재석", age:30},
  {name:"홍철", age:25},
  {name:"형돈", age:50},
  {name:"준하", age:20}
]

function App() {

  return (
    <>
      <h1>자 이제 시작이야!</h1>
      // 스크립트영역 중괄호
      {
        myMudo.length && myMudo.map((mudo, idx) => {
          return (<Mudo key={idx} name={mudo.name} age={mudo.age} />)
        })
      }
      <Start />
    </>
  )
}

export default App
