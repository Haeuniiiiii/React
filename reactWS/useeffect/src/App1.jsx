import { useState } from 'react'
import Friend from './Friend'
import Insub from './insub'
import Jihoo from './Jihoo'

function App1() {
  const [toggle, setToggle] = useState(true);

  const chgBest = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <div>
        <h1>하이 헬로우 안녕!</h1>
        <Friend name={"유진"} alias={"SES"}>
          { toggle ? <Insub /> : <Jihoo /> }
        </Friend>
        <button className='border-amber-300 cursor-pointer' onClick={chgBest}>유진의 베스트친구는?</button>
      </div>
    </>
  )
}

export default App1
