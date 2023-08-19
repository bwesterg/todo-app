import React, { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
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
    
  }
  

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoContainer todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
