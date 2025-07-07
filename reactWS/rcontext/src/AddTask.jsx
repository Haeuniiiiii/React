import { useState, useContext, useRef } from 'react';
import { TasksDispatchContext } from './tasksContext.js';

// let nextId = 3; // const가 아닌 전역변수가 요따구로 밖에 나와있는 건 안 좋음 useRef 쓰는게 좋음

export default function AddTask() {
  const nextId = useRef(3); // 일반 변수 선언 (reactive 상태변수 아님) 이렇게 쓰는게 좋음
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="Add task"
        className='border-2 border-blue-500'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className='bg-amber-300 border-2 border-black'
        onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId.current++, // useRef 는 속성 1개 .current로 사용해야함! 1개밖에 없다
          text: text,
        });
      }}>Add</button>
    </>
  );
}


