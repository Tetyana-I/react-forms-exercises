import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { useState } from 'react';



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    // displays all todos currently in state
    const rendersTodos = () => {
        return (
            <ul>
                {todos.map(todo => (
                    <Todo task={todo.task} key={todo.id} id={todo.id} removeTodo={removeTodo} />
                ))}
            </ul>
        )
    } 

    // adds a new todo to a todos list in state
    const addTodo = (todo) => {
        const newTodo = {
            id: todo.id,
            task: todo.task
        }
        setTodos(todos => [...todos, newTodo]);
    }

    // removes todo from the todos list
    const removeTodo = (todo_id) => {
        const left_todos = todos.filter(todo => todo.id != todo_id);
        setTodos(left_todos);
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            {rendersTodos()}          
        </div>
    )
}

export default TodoList;