import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { TasksProvider } from "./TasksProvider"

function App() {
  // 지금 상태로는 값을 읽기가 편하다는 사실 외에, 수정을 할 수 없어서 쓸모가 없음!

  return (
    <>
    <TasksProvider>
      <h1>오늘은 월요일</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </>
  )
  
}
export default App
