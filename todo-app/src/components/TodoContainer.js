import React from 'react';
import TodoItem from './TodoItem';

export default function TodoContainer({todos, deleteTodo, updateTodo}) {
    //^^destructures the key of todos from props

    const showTodos = () => {
        return todos.map(todo => <TodoItem key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
        //key isn't used for a prop.  it is just used for react to keep up with the virtual dom.
    }

    return (
        <ul className="todo-list">
            {showTodos()}
        </ul>
    )
}
