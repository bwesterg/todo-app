import React, {useState} from 'react';
import TodoForm from './TodoForm';

export default function TodoItem({id, title, content, urgent, done, deleteTodo, updateTodo}) {

    const todo = {id, title, content, urgent, done}
    //^^reverse destructuring to make todo info easier to send to edit form as a prop

    const [isToggled, setIsToggled] = useState(false)
    const handleClick = (event) => deleteTodo(id)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const todoCard = () => (
        <li className="todo-item">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button onClick={handleClick} className="delete-button">DELETE</button>
            <button onClick={handleToggle} className="edit-button">EDIT</button>
        </li>
    )

    return isToggled 
        ? <TodoForm 
            handleToggle={handleToggle} 
            submitAction={updateTodo} 
            todo={todo} /> 
        : todoCard()
    //conditional rendering of form or card based on state
    //submit action updates todo
}
