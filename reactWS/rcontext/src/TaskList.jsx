import { useContext, useEffect } from 'react';
import { TasksContext, TasksDispatchContext } from './tasksContext.js';
import Task from "./Task.jsx";
import axios from 'axios';

export default function TaskList() {
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);

    // 여기가 뿌리는데니까 비동기처리
    useEffect(()=>{
        axios.get("http://localhost:8888/todos").then(resp => {
            //useReducer를 사용했기 때문에 dispatch 로 reducer호출
            dispatch({
                type : "getTodos"
                ,payload: resp.data // tasksReducer호출된다!
            })
        })
    }, []);

    return (
    <ul>
        {tasks.map(task => (
        <li key={task.id}>
            <Task task={task} />
        </li>
        ))}
    </ul>
    );
}


