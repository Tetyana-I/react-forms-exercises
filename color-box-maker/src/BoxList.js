import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


const BoxList = () => {
    // const INITIAL_STATE = [
    //     {color: 'blue', width: 100, height: 100},
    //     {color: 'green', width: 150, height: 150}

    // ];


    // const [boxes, setBoxes] = useState([]);
    const [boxes, setBoxes] = useState([]);

    // display all boxes currently in state
    const renderBoxes = () => {
        return (
            <div className="BoxList">
                {boxes.map(box => (<Box color={box.color} height={box.height} width={box.width} removeBox={removeBox}/>))}
            </div>
        )
    }

    // added a new box to a boxes list
    const addBox = (box) => {
        const newBox = {
            id: uuid(),
            color: box.color,
            width: +box.width,
            height: +box.height
        }
        setBoxes(boxes => [...boxes, newBox]);
        console.log("boxes", boxes)
    }

    // remove box from the boxes list
    const removeBox = () => {
        console.log('Hey!!!');
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