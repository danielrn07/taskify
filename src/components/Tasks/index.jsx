import { FaXmark, FaPen, FaCircleInfo } from 'react-icons/fa6'

const TaskList = (props) => {
  return (
    <div className="flex flex-col mt-8">
      <ul className="item-list flex flex-col bg-neutral-900 h-[398px] overflow-auto rounded-t">
        {props.tasks.length === 0 ? (
          <div className="flex grow gap-2 justify-center items-center">
            <FaCircleInfo />
            <div className="select-none">Nenhuma tarefa adicionada.</div>
          </div>
        ) : (
          props.tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 transition ease-in hover:bg-gray-100/5 border-t border-gray-100/5 first:border-none"
            >
              <div className="flex gap-4 items-center grow">
                <input
                  type="checkbox"
                  checked={task.isChecked}
                  onChange={(e) => props.handleChecked(e, index)}
                  className="outline-none"
                />
                <div
                  className={`${task.isChecked ? 'line-through text-neutral-500' : ''}`}
                >
                  {task.text}
                </div>
              </div>
              <span className="flex items-center gap-2">
                <FaPen
                  size={10}
                  onClick={(e) => props.handleEdit(e, index)}
                  className="cursor-pointer"
                />
                <FaXmark
                  color="#E11D48"
                  onClick={(e) => props.handleDelete(e, index)}
                  className="cursor-pointer"
                />
              </span>
            </li>
          ))
        )}
      </ul>            
    </div>
  )
}

export default TaskList
