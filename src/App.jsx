
import TodoApp from "./components/TodoApp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      <div className="flex justify-between px-10 py-2">
        <h1 className="text-3xl font-bold text-pink-400">Homework ToDo List <FontAwesomeIcon icon={faListUl}/></h1>
      </div>
      <div className="container ml-auto mr-auto max-w-[700px] p-4 text-brown-text">
        <TodoApp />
      </div>
    </>
  )
}

export default App
