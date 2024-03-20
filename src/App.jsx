import React, { useState, Component } from 'react'
import './App.css'
import Form from './components/Form'
import TaskList from './components/Tasks'

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

  handleSubmit = (e) => {
    e.preventDefault()

    const { tasks, index } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    const taskExists = tasks.some((task) => task.text === newTask)

    if (taskExists) return

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

  render() {
    const { newTask, tasks } = this.state

    return (
      <>
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
        />
      </>
    )
  }
}

export default App
