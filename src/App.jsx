import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalView from "./pages/GlobalView";
import ContinentView from "./pages/ContinentView";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar siempre visible */}
        <Navbar />

        {/* Rutas y vistas */}
        <Routes>
          {/* Ruta para la vista global */}
          <Route path="/" element={<GlobalView />} />

          {/* Ruta para la vista de cada continente */}
          <Route path="/continent/:region" element={<ContinentView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
