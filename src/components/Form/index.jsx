import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Form = ({ handleSubmit, handleChange, newTask, inputRef }) => {
  return (
    <form onSubmit={handleSubmit} action="#" className='flex justify-center items-center'>
      <input
        type="text"
        onChange={handleChange}
        value={newTask}
        ref={inputRef}
        placeholder="New task"
        className="h-10 px-5 text-xl rounded-l outline-none"
      />
      <button type="submit" className='h-10 w-10 rounded-r bg-rose-600 hover:bg-rose-700 color-white flex justify-center items-center transition'>
        <FaPlus />
      </button>
    </form>
  )
}

export default Form
