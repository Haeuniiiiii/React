import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router"
import NotFound from "./NotFound"
import Hung from "./Hung"
import Sohee from "./Sohee"
import Yujin from "./Yujin"
import Jh from "./jh"
import Uj from "./Uj"
import Mr from "./Mr"

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>라우터할거에염</h1>
        <Link to={"/"}>홈</Link><br />
        <Link to={"/hj"}>형진</Link><br />
        <Link to={"/sh"}>소희</Link><br />

        {/* 새로고침이 되는 문제점 발생
        <a href={"/"}>홈스윗홈</a><br />
        <a href={"/hj"}>형진</a><br />
        <a href={"/sh"}>소희</a><br /> */}
        <hr />

        <Routes>
          <Route path="/" element={<Yujin />} >
            <Route path="jh" element={<Jh />} />
            <Route path="mr" element={<Mr />} />
            <Route path="uj" element={<Uj />} />
          </Route>

          <Route path="/hj" element={<Hung />} />
          <Route path="/sh" element={<Sohee />} />
          <Route path="*" element={<NotFound />} />
          {/* * 는 가장 하단에 써야함 */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
