import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} /> {/* eliminar esta ruta y añadir el componente a home*/}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

