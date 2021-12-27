// The component displays a div with a background color, width and height based on the props passed to it. 
// Has a button, click on this button removes this box () 

import './Box.css';

const Box = ({width=50, height=50, color='white', removeBox, id}) => {
    const style = {
        backgroundColor: color,
        height: height,
        width: width,
        border: '1px solid gray'
    }

    // invoke a parent function and pass an id of the box to delete
    const handleClick = () => {
        removeBox(id);
    }

    return (
        <div className="Box">
          <div style={style}></div> 
          <button onClick={handleClick}>X</button> 
        </div>
    )
}

export default Box;