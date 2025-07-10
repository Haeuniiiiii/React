import { useLocation, useParams, useSearchParams } from "react-router";

function Sohee() {

  // location 객체의 정보를 얻어 올 때 사용, 
  // 그냥 location(window.location)을 바로 사용하는 사람도 있음
  const location = useLocation();
  console.log("체킁 state", location.state);




  // const [변수명, 세터] = useSearchParams();
  // queryString 처리 HOOK! (useState 모방)
  // ? 뒤에 있는 것이 페이지 요청에 따라 들어오기 때문에 () 안에 초기값 주지 않아도 된다.
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("체킁 서치파람스 queryString girl" , searchParams.get("girl"));  
  console.log("체킁 서치파람스 queryString age" , searchParams.get("age"));  
  // 1개 request.getParameter("girl") , request.getParameterValues("girl") 여러개 getAll

  const { snum, sname } = useParams(); // @PathVatiable과 같은 방식
  console.log("체킁 snum sname", snum, sname);
  
  const fCK = () => {
    // useState 세터 함수와 같은 기능 단지, 주소표시줄 쿼리스트링에만 적용됨!
    setSearchParams({
      name:["지후", "인섭", "진호"]
      ,age:100
    });
  };

  return (
    <div>
        <h1>{ snum } 소희짱 { sname } </h1>
        <h1>{ searchParams.getAll("name")[1] } { searchParams.get("age") } </h1>
        <button onClick={fCK} >눌러방</button>
    </div>
  )
}

export default Sohee