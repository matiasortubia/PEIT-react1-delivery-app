import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Navbar } from './components/navbar/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/navbar' element={<Navbar />} /> {/* eliminar esta ruta y añadir el componente a home*/}
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

