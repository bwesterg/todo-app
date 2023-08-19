import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
import { patchTodo, postTodo, deleteTodo } from './helpers';

const todosUrl = "http://127.0.0.1:3000/todos";

class App extends Component {
  state = {
    todos: []
  }

  //only runs one time, after initial render.  
  //running fetch inside componentDidMount rather than, say, componentDidUpdate, is less data intensive.  Especially if app makes multiple api calls.
  componentDidMount(){
    this.getTodos()
  }
  
  getTodos = () => {
    fetch(todosUrl)
      .then(response => response.json())
      .then(todos => this.setState({todos}))     
      //keeping this fetch in App.js, rather than moving to helps file b/c I am setting state
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

    postTodo(newTodo)
  }

  updateTodo = (updatedTodo) => {
    let todos = this.state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)

    this.setState({ todos })

    patchTodo(updatedTodo)
  }

  deleteTodo = (id) => {
    let filtered = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: filtered
    })

    deleteTodo(id)
  }
  

  render(){
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <TodoForm submitAction={this.addTodo} />
        <TodoContainer todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
