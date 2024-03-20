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

    if (tasks.indexOf(newTask) !== -1) return

    const newTasks = [...tasks]

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
      })
    }

    if (index !== -1) {
      newTasks[index] = newTask

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
      newTask: tasks[index],
    })
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
        />
      </>
    )
  }
}

export default App
