import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

const store = (set) => ({
  tasks: [{id: 770271739812, title: 'TestTask', state: 'ONGOING'}],

  draggedTask: null,

  addTask: (title, state) =>
    set(
      (store) => ({tasks: [...store.tasks, {id: Date.now(), title, state}]}),
      false,
      'addTask'
    ),

  deleteTask: (id) =>
    set(
      (store) => ({
        tasks: store.tasks.filter((task) => task.id !== id),
      }),
      false,
      'deleteTask'
    ),

  setDraggedTask: (id, title) =>
    set({draggedTask: {id, title}}, false, 'setDraggedTask'),

  moveTask: (id, title, state) =>
    set(
      (store) => ({
        tasks: store.tasks.map((task) =>
          task.title === title ? {id, title, state} : task
        ),
      }),
      false,
      'moveTask'
    ),
})

export const useStore = create(persist(devtools(store), {name: 'store'}))
