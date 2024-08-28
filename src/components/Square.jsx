import "./Square.css"

  const squareStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: "pink",
    margin: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    cursor: 'pointer'  // Añadir cursor para indicar clickeabilidad
  };
  
 



function Square({ value, onClick }) {
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={onClick}
      >
        {value}
      </div>
    );
  }

  export default Square