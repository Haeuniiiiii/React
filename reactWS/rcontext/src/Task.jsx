import { useContext, useState } from "react";
import { TasksDispatchContext } from "./tasksContext";

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch =  useContext (TasksDispatchContext);
    let taskContent;
    
    if (isEditing) {
        taskContent = (
            <>
            <input
                value={task.text}
                onChange={e => {
                dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        text: e.target.value
                    }
                });
            }} 
            />

            <button 
                className='bg-amber-200'
                onClick={() => setIsEditing(false)}>
                Save
            </button>
        </>
        );

    } else {
        taskContent = (
            <>
            {task.text}
            <button className="border-2 border-green-500"  
                onClick={() => setIsEditing(true)}>
                Edit
            </button>
            </>
        );
    }
    return (
        <label>
        <input
            type="checkbox"
            checked={task.done}
            onChange={e => {
            dispatch({
                type: 'changed',
                task: {
                ...task,
                done: e.target.checked
                }
            });
            }}
        />
        {taskContent}
        <button 
            className="border-red-500 border-2" 
            onClick={() => {
            dispatch({
            type: 'deleted',
            id: task.id
            });
        }}>
            Delete
        </button>
        </label>
    );
}

export default Task;