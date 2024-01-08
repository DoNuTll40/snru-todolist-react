
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const { todos, hdlDel, hdlUpdate, hdlStatus , isLoading} = props

  if (!todos) {
    return null;
  }

  return (
    <div className="todo-con">
      {todos.map(el => (
        <TodoItem key={el.id} job={el} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus} isLoading={isLoading}/>
      ))
      }
      <p className="text-[12px] max-sm:text-[9px] text-center text-white">&copy;Copyright <a className="underline align-text-top" href="https://github.com/DoNuTll40" target="_blank">CS125 Nuttawoot Chawna SNRU</a> | Source Code : <a href="https://github.com/DoNuTll40/snru-todolist-react" className="underline align-text-top" target="_blank">Github</a> | Link Source : <a className="underline align-text-top" href="https://github.com/DoNuTll40/api-todolist-snru" target="_blank">API</a></p>
    </div>
  )
}

export default TodoContainer