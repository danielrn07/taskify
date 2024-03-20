import React from 'react'
import { FaXmark, FaPen } from 'react-icons/fa6'

const TaskList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className="flex flex-col h-96 mt-8">
      <ul className="item-list flex flex-col bg-neutral-900 h-full overflow-auto rounded-t">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 transition ease-in duration-300 hover:bg-gray-100/5"
          >
            {task}
            <span className="flex items-center gap-2">
              <FaPen
                size={10}
                onClick={(e) => handleEdit(e, index)}
                className="cursor-pointer"
              />
              <FaXmark
                color="#E11D48"
                onClick={(e) => handleDelete(e, index)}
                className="cursor-pointer"
              />
            </span>
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
