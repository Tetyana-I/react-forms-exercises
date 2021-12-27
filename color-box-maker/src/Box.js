import './Box.css';

const Box = ({width=50, height=50, color='white', removeBox}) => {
    const style = {
        backgroundColor: color,
        height: height,
        width: width,
        border: '1px solid gray'
    }

    return (
        <div className="Box">
          <div style={style}></div> 
          <button onClick={removeBox}>X</button> 
        </div>
    )
}

export default Box;