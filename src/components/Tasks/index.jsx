import React from 'react'
// import { FaXmark, FaPen } from "react-icons/fa6";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex flex-col h-96 mt-8">
      <ul className="item-list flex flex-col bg-neutral-900 h-full overflow-auto rounded-t">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 transition ease-in duration-300 hover:bg-gray-100/5"
          >
            {task}
          </li>
        ))}
      </ul>

      <div className="self-end p-2 bg-neutral-900 border-t border-gray-500/30 w-full rounded-b">
        barra inferior
      </div>
    </div>
  )
}

export default TaskList
