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

    componentDidMount(){
        const {todo} = this.props
        if(this.props.todo){
            const {id, title, content, urgent, done} = todo
            this.setState({
                id,
                title,
                content,
                urgent,
                done
            })
        }
    }

    handleChange = (event) => {
        let {name, value, checked} = event.target

        value = (name === "urgent") || (name === "done") ? checked : value

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitAction(this.state)
        if (this.props.handleToggle){
            this.props.handleToggle()
        }
    }
      //submitAction ADDS NEW todo if form is used to create a NEW todo; 
      //submitAction UPDATES existing todo if updateTodo is called, but on TodoItem.js.
      //Doing this b/c it allows the app to know if it should ADD or UPDATE based on props passed to it, and without using another if statement.

    showDoneCheckbox = () => {
        return this.props.todo
            ? (
                <div className="input-group">
                    <label>Completed</label>
                    <input 
                        type="checkbox" 
                        name="done" 
                        checked={this.state.done} 
                        onChange={this.handleChange} 
                        className="checkbox"
                    />
                </div>
            ) : null
    }

    showCloseButton = () => {
        return this.props.todo
            ? <button className="close-button" onClick={this.props.handleToggle}>CLOSE FORM</button>
            : null
    }

    render(){
        const {title, content, urgent, done} = this.state

        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                {this.props.todo ? <h2>Edit Todo</h2> : <h2>Create a New Todo</h2>}
                <label>Title</label>
                <input type="text" placeholder="" name="title" value={title} onChange={this.handleChange} />
                <label>Content</label>
                <input type="text" name="content" placeholder="" value={content} onChange={this.handleChange} />
                <div className="input-group">
                    <label>Urgent</label>
                    <input 
                        type="checkbox" 
                        name="urgent" 
                        checked={urgent} 
                        onChange={this.handleChange} 
                        className="checkbox"
                    />
                </div>
                {this.showDoneCheckbox()}
                <input type="submit" />
                {this.showCloseButton()}
            </form>
        )
    }
}
