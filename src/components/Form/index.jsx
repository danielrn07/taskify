import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Form = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      action="#"
      className="flex w-96 justify-center items-center"
    >
      <input
        type="text"
        onChange={props.handleChange}
        value={props.newTask}
        ref={props.inputRef}
        placeholder="New task"
        className="h-10 px-2 w-full text-lg rounded-l outline-none"
      />
      <button
        type="submit"
        className="h-10 w-10 rounded-r bg-rose-600 hover:bg-rose-700 color-white flex justify-center items-center transition"
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default Form
