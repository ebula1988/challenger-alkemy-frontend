import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from './components/MainMenu';
import IngresosList from './components/presupuestoComponents/IngresosList';
import EgresosList from './components/presupuestoComponents/egresosList';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/ingresos" element={<IngresosList />} />
        <Route path="/egresos" element={<EgresosList />} />
   
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
