import {create} from 'zustand'

const store = (set) => ({
  tasks: [{id: 770271739812, title: 'TestTask', state: 'ONGOING'}],

  addTask: (title, state) =>
    set((store) => ({tasks: [...store.tasks, {id: Date.now(), title, state}]})),

  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
})

export const useStore = create(store)
