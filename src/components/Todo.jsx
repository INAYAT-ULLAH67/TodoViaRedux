import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/TodoSlice'

function Todo() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const [editingTodo, setEditingTodo] = useState(null)
  const [editText, setEditText] = useState("")

  const openEditModal = (todo) => {
    setEditingTodo(todo)
    setEditText(todo.text)
  }

  const closeEditModal = () => {
    setEditingTodo(null)
    setEditText("")
  }

  const saveEdit = (e) => {
    e.preventDefault()
    if (!editText.trim()) return
    dispatch(updateTodo({ id: editingTodo.id, text: editText }))
    closeEditModal()
  }

  return (
    <div className="max-w-md mx-auto mt-4 flex flex-col gap-2">
      {todos.length === 0 && (
        <p className="text-center text-gray-400">No todos yet.</p>
      )}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-base text-gray-800 break-words">
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-amber-400 text-gray-900 hover:bg-amber-500 transition-colors"
              onClick={() => openEditModal(todo)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1.5 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Edit Modal */}
      {editingTodo && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={closeEditModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-sm p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Edit Todo
            </h2>
            <form onSubmit={saveEdit} className="flex flex-col gap-4">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base outline-none focus:ring-2 focus:ring-indigo-500/40 transition-shadow"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!editText.trim()}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo