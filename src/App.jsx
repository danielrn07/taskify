import React, { useState, Component } from 'react'
import './App.css'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props);
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

    console.log(tasks)
  }

  handleReset = ({ input }) => {
    this.setState({
      newTask: ''
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
      </>
    )
  }
}

export default App
