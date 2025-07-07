import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);


// export function useTasks() {
//     return useContext(TasksContext);
// }
// export function useTasksDispatch() {
//     return useContext(TasksDispatchContext);
// }

// 상태 관리 Reducer userReducer의  reducer 자리 사용
// 상태 처리
export function tasksReducer(tasks, action) {

    switch (action.type) {
        case 'getTodos' : {
            return [...action.payload];
        }

        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }

        case 'changed': {
        return tasks.map(t => {
            if (t.id === action.task.id) {
                return action.task;
            } else {
                return t;
            }
            });
        }

        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }

}

