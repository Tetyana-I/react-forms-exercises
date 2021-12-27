// The component places the state that contains all of the boxes {id, color, width, height},
// renders all of the Box components along with the NewBoxForm component

import { useState } from 'react';

import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    // function displays all boxes currently in state
    const renderBoxes = () => {
        return (
            <div className="BoxList">
                {boxes.map(box => (
                <Box color={box.color} height={box.height} width={box.width} removeBox={removeBox} id={box.id} key={box.id}
                />))}
            </div>
        )
    }

    // adds a new box to a boxes list in state
    const addBox = (box) => {
        const newBox = {
            id: box.id,
            color: box.color,
            width: +box.width,
            height: +box.height
        }
        setBoxes(boxes => [...boxes, newBox]);
    }

    // removes box from the boxes list
    const removeBox = (box_id) => {
        const left_boxes = boxes.filter(box => box.id != box_id);
        setBoxes(left_boxes);
    }

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;