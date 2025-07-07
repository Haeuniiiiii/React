// 자주 쓰는 형태로 변경 중, 모양만 간단하게...
// Provider 를 보통 분리해서 만들어 씀!

import { useReducer } from "react";
import { TasksContext, TasksDispatchContext, tasksReducer } from "./tasksContext";

// 가짜 데이터!!!
// const initialTasks = [
//   { id: 0, text: '리액트 잘 이해하고 싶다', done: true },
//   { id: 1, text: '오늘은 샌드위치', done: false },
//   { id: 2, text: '저녁은 로제또뽀끼', done: false }
// ];

export function TasksProvider({ children }) {
    // const [tasks, dispatch] = useReducer (tasksReducer, initialTasks);
    const [tasks, dispatch] = useReducer (tasksReducer, []); // ajax로 서버에서 데이터를 가져와야함

    return (
    <TasksContext.Provider TasksContext value={tasks}>
        <TasksDispatchContext.Provider  TasksDispatchContext value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
    </TasksContext.Provider>
    );
}