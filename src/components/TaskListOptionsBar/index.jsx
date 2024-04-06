const TaskListOptionsBar = (props) => {
    const tasks = props.tasks
    let total = tasks.length

    let complete = 0
    for (let i in tasks) {
      if (tasks[i].isChecked) complete++
    }
    return (
    <div className="flex select-none outline-none py-2 px-3 bg-neutral-900 border-t border-gray-500/30 w-full rounded-b">
        <div className="text-sm text-neutral-500">
            {complete} of {total} tasks
        </div>
    </div>
    )
}

export default TaskListOptionsBar