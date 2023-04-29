import {useState} from 'react'
import './Column.css'
import Task from '../task/Task'
import {useStore} from '../../store'
import {shallow} from 'zustand/shallow'

const Column = ({state}) => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state == state),
    shallow
  )

  const addTask = useStore((store) => store.addTask)

  return (
    <div className='column'>
      <div className='titleWrapper'>
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>

      {tasks.map((task) => (
        <Task key={task.id} title={task.title} />
      ))}

      {open && (
        <div className='modal'>
          <div className='modalContent'>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => {
                addTask(text, state)
                setText('')
                setOpen(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Column
