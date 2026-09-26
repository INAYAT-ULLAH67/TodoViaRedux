import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/TodoSlice'

export default function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo({ text: input }))
    setInput("")
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <form
        onSubmit={addTodoHandler}
        className="flex items-center gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2.5 rounded-lg text-base text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-shadow"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95 transition-all shadow-sm hover:shadow-md"
        >
          <span className="text-lg leading-none">+</span>
          Add
        </button>
      </form>
    </div>
  )
}