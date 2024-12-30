import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalView from "./pages/GlobalView";
import ContinentView from "./pages/ContinentView";
import NavBar from "./components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GlobalView />} />
        <Route path="/continent/:region" element={<ContinentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
