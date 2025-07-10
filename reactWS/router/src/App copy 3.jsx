import { BrowserRouter, NavLink, Route, Routes } from "react-router"
import Hung from "./Hung"
import Jh from "./jh"
import Mr from "./Mr"
import NotFound from "./NotFound"
import Sohee from "./Sohee"
import Uj from "./Uj"
import Yujin from "./Yujin"

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>라우터할거에염</h1>
        <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>홈</NavLink><br />
        <NavLink to={"/hj"} className={({isActive}) => isActive ? "active" : ""}>형진</NavLink><br />
        <NavLink to={"/sh"} className={({isActive}) => isActive ? "active" : ""}>소희</NavLink><br />

        {/* <Link to={"/"}>홈</Link><br />
        <Link to={"/hj"}>형진</Link><br />
        <Link to={"/sh"}>소희</Link><br /> */}

        {/* 새로고침이 되는 문제점 발생
        <a href={"/"}>홈스윗홈</a><br />
        <a href={"/hj"}>형진</a><br />
        <a href={"/sh"}>소희</a><br /> */}
        <hr />

        <Routes>
          <Route path="/" Component={Yujin} >
            <Route path="jh" element={<Jh />} />
            <Route path="mr" Component={Mr} />
            <Route path="uj" element={<Uj />} />
            {/* Component와 element 모두 사용가능이지만 요즘에는 Component 사용권장 */}
          </Route>

          <Route path="/hj" element={<Hung />} />
          {/* <Route path="/sh/:snum/:sname" element={<Sohee />} /> */}
          <Route path="/sh/:snum/:sname" element={<Sohee />} />
          {/* 스프링의 PathValueable 과 같다 */}
          <Route path="*" element={<NotFound />} />
          {/* * 는 가장 하단에 써야함 */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
