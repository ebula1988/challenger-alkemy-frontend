import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainMenu from './components/MainMenu';
import IngresosList from './components/presupuestoComponents/IngresosList';
import EgresosList from './components/presupuestoComponents/EgresosList';
import IngresosForm from './components/presupuestoComponents/IngresosForm'
import EgresosForm from './components/presupuestoComponents/EgresosForm';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/ingresos" element={<IngresosList />} />
        <Route path="/egresos" element={<EgresosList />} />
        <Route path="/ingresosform" element={<IngresosForm />} />
        <Route path="/egresosform" element={<EgresosForm />} />
   

   
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
