import { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {task: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Send text of todo and id to parent and clears form
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {...formData, id: uuid()};
        addTodo(newTodo);
        setFormData(INITIAL_STATE);
        };

    // Updates local state with current state of input element
    const handleChange = (evt) => {
        const { name, value }= evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>My todos</h1>
            <input className="NewTodoForm-input"
                name="task"
                type="text"
                placeholder="I want to ..."
                value={formData.task}
                onChange={handleChange}
                required>
            </input>
            <button>Add to a list</button>
        </form>
    )
}

export default NewTodoForm;