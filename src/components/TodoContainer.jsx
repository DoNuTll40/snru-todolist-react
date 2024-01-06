
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
      <p className="text-[12px] text-center text-white">&copy;Copyright <a className="underline align-text-top" href="https://github.com/DoNuTll40" target="_blank">CS125 Nuttawoot Chawna SNRU</a></p>
    </div>
  )
}

export default TodoContainer