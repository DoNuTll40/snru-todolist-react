
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function FormAddTodo(props) {
  const {hdlAdd} = props
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()
    if (input === '') {
      alert('Please enter information!')
    }else {
      let newJob = { todo: input, completed: false, userId: 1 }
      hdlAdd(newJob)
      setInput('');
    }
  }

  return (
    <form className="flex gap-2 p-2 shadow-light bg-pink-c rounded-md border-[3px] border-white hover:scale-105 transition delay-75" onSubmit={hdlSubmit}>
      <input className="grow px-5 rounded-full text-lg w-dvw" value={input} onChange={e=>setInput(e.target.value)} placeholder="Create new job" />
      <button className="flex-none px-3 bg-yellow-l h-10 transition delay-75 rounded-full hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2" type="submit"><FontAwesomeIcon icon={faPlus}/></button>
      <input className="flex-none px-4 font-bold transition delay-75 bg-yellow-l h-10 rounded-full hover:bg-brown-text hover:text-yellow-l active:scale-95 active:outline-none active:ring-2 active:ring-brown-text active:ring-offset-2" type="button" value="C" onClick={() => setInput('')} />
    </form>
  )
}

export default FormAddTodo