/* eslint-disable react-refresh/only-export-components */
import IdolList from "./IdolList";
import IdolProvider from "./IdolProvider";

function App() {
  return (
    <>
      <IdolProvider>
        <h3>창고입니다 데이터를 담는 창고..</h3>
        <h3>Provider에 둘러싸여 있어서 나는 나올 수 있다</h3>
        <h3>여기는 children 입니다</h3>
        <IdolList />
      </IdolProvider>
    </>
  )
}

export default App
