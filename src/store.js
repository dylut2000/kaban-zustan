import {create} from 'zustand'
import {devtools} from 'zustand/middleware'

const store = (set) => ({
  tasks: [{id: 770271739812, title: 'TestTask', state: 'ONGOING'}],

  draggedTask: null,

  addTask: (title, state) =>
    set((store) => ({tasks: [...store.tasks, {id: Date.now(), title, state}]})),

  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),

  setDraggedTask: (title) => set({draggedTask: title}),

  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? {title, state} : task
      ),
    })),
})

export const useStore = create(devtools(store))
