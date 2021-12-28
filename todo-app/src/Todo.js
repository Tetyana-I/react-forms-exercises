import "./Todo.css";

const Todo = ( {task, removeTodo, id}) => {
    
    const handleClick = () => {
        removeTodo(id);
    }

    return (
        <li>
            <p className="Todo-task">{ task }</p> 
            <button onClick={handleClick}> X </button>
        </li>
    )
}

export default Todo;