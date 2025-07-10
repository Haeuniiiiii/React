import { NavLink, RouterProvider } from "react-router"
import { jurouter } from "./Jurouter"

function App() {

  return (
    <>
      <RouterProvider router={jurouter}>
        <h1>라우터할거에염</h1>
          <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>
            홈
          </NavLink>
        <br />
        
          <NavLink to={"/hj"} className={({isActive}) => isActive ? "active" : ""}>
            형진
          </NavLink>
          <br />
        
          <NavLink to={"/sh"} className={({isActive}) => isActive ? "active" : ""}>
            소희
          </NavLink>
        <br />
        
        <hr />
      </RouterProvider>
    </>
  )
}

export default App
