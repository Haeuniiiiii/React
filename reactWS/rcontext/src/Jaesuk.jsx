import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./tasksContext";

function Jaesuk() {

    const myTasks = useContext(TasksContext);
    console.log("체킁킁1", myTasks);
    
    const myDispatch = useContext(TasksDispatchContext);
    console.log("체킁킁2", myDispatch); // hook이 되돌려주는 함수를 확인할 수 있음

    return (
        <>
            <div>
                재석
            </div>
        </>
    )
}

export default Jaesuk