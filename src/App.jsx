import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import TaskList from './components/Tasks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaCircleInfo } from 'react-icons/fa6'

class App extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if (!tasks) return

    if (tasks) {
      this.setState({
        tasks
      })
    }
  }

  componentDidUpdate(_, prevState) {
    const { tasks } = this.state

    if (tasks === prevState.tasks) return

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { tasks, index } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    const taskExists = tasks.some((task) => task.text === newTask)
    const taskEmpty = newTask === ''

    const taskExistsID = 'Task Exists'
    if (taskExists) {
      toast.error('Essa tarefa já existe.', {
        icon: <FaCircleInfo size={24} />,
        toastId: taskExistsID,
      })
      return
    }

    const taskEmptyId = 'Task Empty'
    if (taskEmpty) {
      toast.error('A tarefa não pode estar vazia.', {
        icon: <FaCircleInfo size={24} />,
        toastId: taskEmptyId,
      })
      return
    }

    const newTaskObject = {
      text: newTask,
      isChecked: false,
    }

    const newTasks = [...tasks]

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTaskObject],
      })
    }

    if (index !== -1) {
      newTasks[index].text = newTask

      this.setState({
        tasks: [...newTasks],
        index: -1,
      })
    }

    this.handleReset()
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state
    const updatedTasks = tasks.toSpliced(index, 1)

    this.setState({
      tasks: [...updatedTasks],
    })
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state

    this.setState({
      index,
      newTask: tasks[index].text,
    })

    this.inputRef.current.focus()
  }

  handleReset = () => {
    this.setState({
      newTask: '',
    })

    this.inputRef.current.focus()
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleChecked = (e, index) => {
    const { tasks } = this.state
    const newTasks = [...tasks]

    newTasks[index].isChecked = !tasks[index].isChecked

    this.setState({
      tasks: [...newTasks],
      index: -1,
    })
  }

  handleCheckedAll = () => {
    const { tasks } = this.state

    const checkedAll = tasks.map((task) => {
      return {
        text: task.text,
        isChecked: true,
      }
    })

    this.setState({
      tasks: [...checkedAll],
    })
  }

  render() {
    const { newTask, tasks } = this.state

    const contextClass = {
      success: 'bg-neutral-900',
      error: 'bg-neutral-900',
      info: 'bg-neutral-900',
      warning: 'bg-neutral-900',
      default: 'bg-neutral-900',
      dark: 'bg-neutral-900 font-gray-300',
    }

    return (
      <>
        <ToastContainer
          toastClassName={(context) =>
            contextClass[context?.type || 'default'] +
            ' relative p-1 min-h-8 min-w-4 rounded-md justify-between overflow-hidden cursor-pointer'
          }
          bodyClassName={() =>
            'flex items-center select-none text-sm font-white font-med block p-4'
          }
          position="top-right"
          autoClose={3000}
          draggable
          stacked
          closeButton={false}
          closeOnClick
          theme="dark"
        />

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
          inputRef={this.inputRef}
        />

        <TaskList
          tasks={tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleChecked={this.handleChecked}
          handleCheckedAll={this.handleCheckedAll}
        />
      </>
    )
  }
}

export default App
