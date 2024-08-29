
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Game from './components/Game'; // Asegúrate de que el nombre del archivo sea correcto

function App() {
  return (
    <div className='cat'>
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
