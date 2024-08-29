
import { useNavigate } from 'react-router-dom';

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const startSound = new Audio('/startgame.mp3');
    startSound.play().catch(error => {
      console.log("Error al reproducir el sonido de inicio:", error);
    });
    navigate('/game');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#6a0dad',
    color: 'white',
    textAlign: 'center',
    margin: "0"
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1.2em',
    color: 'white',
    backgroundColor: '#ff0043',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <h1>Tic Tac Toe</h1>
      <button style={buttonStyle} onClick={handleStartClick}>
        Iniciar
      </button>
    </div>
  );
};

export default StartScreen;
