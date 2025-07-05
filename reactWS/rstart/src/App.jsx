import Idol from "./Idol"

const myIdols = [
  {name:"명수", age:20},
  {name:"재석", age:30},
  {name:"하니", age:25},
  {name:"지디", age:50},
  {name:"지영", age:20}
]
function App() {
  // 항상 부모 1개만 return 되도록 해야함!
  return (
    <>
      <h1>Hello, React!</h1>
      {
        myIdols.length > 0 && myIdols.map((idol,idx) => {
          return (<Idol key={idx} name={idol.name} age={idol.age} />)
        })
      }
    </>
  )
}

export default App
