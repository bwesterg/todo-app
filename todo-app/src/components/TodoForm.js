import React, { Component } from 'react';

const initialState = {
    title: "",
    content: "",
    urgent: false,
    done: false
}

//needs to be class component b/c forms will get their value from state
export default class TodoForm extends Component {


    state = initialState
    // State initialized as initialState.
    // This way, when I want to reset state to their initial values, I can call initialState.

    handleChange = (event) => {
        let {name, value, checked} = event.target

        value = (name === "urgent") ? checked : value
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
    }

      //needs function in app.js to change state of todos when new todo is added


    render(){
        const {title, content, urgent} = this.state

        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <h2>Create a New Todo</h2>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <label>Content</label>
                <input type="text" name="content" value={content} onChange={this.handleChange} />
                <div className="urgent-input">
                    <label>Urgent</label>
                    <input 
                        type="checkbox" 
                        name="urgent" 
                        checked={urgent} 
                        onChange={this.handleChange} 
                    />
                </div>
                <input type="submit" />


            </form>
        )
    }
}
