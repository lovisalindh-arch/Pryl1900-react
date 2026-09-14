import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Omoss from './pages/Omoss.js';
import Varfor from './pages/Varfor';
import Tomning from './pages/Tomning';
import Kontakt from './pages/Kontakt';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/omoss" element={<Omoss />} />
          <Route path="/varfor" element={<Varfor />} />
          <Route path="/tomning" element={<Tomning />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
