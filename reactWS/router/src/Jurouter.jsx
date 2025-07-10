import { createBrowserRouter } from "react-router";
import Yujin from "./Yujin";
import Jh from "./jh";
import Mr from "./Mr";
import Uj from "./Uj";
import Hung from "./Hung";
import Sohee from "./Sohee";
import NotFound from "./NotFound";

// JSON 형식! 
export const jurouter = createBrowserRouter([
    {
        path:"/"
        ,Component:Yujin
        ,children:[
            {
                path:"/jh"
                ,Component:Jh
            },
            {
                path:"/jh"
                ,Component:Jh
            },
            {
                // path:"/mr"
                index:true  // 이걸 쓰면 path는 쓰면 안됨!! default란 이야기    
                ,Component:Mr
            },
            {
                path:"/uj"
                ,Component:Uj
            },
        ]
    },
    {
        path:"/hj"
        ,Component: Hung
    },
    {
        path:"/sh/:snum/:sname"
        ,Component: Sohee
    },
    {
        path:"*"
        ,Component: NotFound
    },
]);   // 빼서 배열안에 넣게 되어있다.