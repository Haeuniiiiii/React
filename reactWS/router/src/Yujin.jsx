import { Outlet } from "react-router"

function Yujin() {
  return (
    <div>
        <h1>여긴 Yujin 유진 Home</h1>
        {/* 자식이 여기에 나온다  */}
        <Outlet />
    </div>
  )
}

export default Yujin