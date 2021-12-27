import { useState } from "react";
import './NewBoxForm.css'
// Form to create a new box and add it to the boxes list.
// Has state for color/width/height of the box; 
// On submission, sends {color, width, height} to the function received from the parent}

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {color: "", width: 0, height: 0};
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    // send color, width, height to parent and clears form
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        console.log("formData", formData);
        setFormData(INITIAL_STATE);
        console.log("INITIAL DATA", INITIAL_STATE);
        console.log("formData after cleaning", formData);
      };

    // Update local state with current state of input element
    const handleChange = (evt) => {
    const { name, value }= evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input className="NewBoxForm-input"
                id="color"
                name="color"
                value={FormData.color}
                onChange={handleChange}>
            </input>
            <label htmlFor="width">Width:</label>
            <input className="NewBoxForm-input"
                id="width"
                name="width"
                type="number"
                min="5"
                step="5"
                max="200"
                value={FormData.width}
                onChange={handleChange}>
            </input>
            <label htmlFor="height">Height:</label>
            <input className="NewBoxForm-input"
                id="height"
                name="height"
                type="number"
                min="5"
                step="5"
                max="200"
                value={FormData.height}
                onChange={handleChange}>
            </input>
            <button>Add a new box</button>
        </form>
    )
}

export default NewBoxForm;