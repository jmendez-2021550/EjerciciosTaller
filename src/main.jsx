import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PerfilEstudiante from './components/PerfilEstudiante.jsx'
import CursosDisponibles from './components/CursosDisponibles.jsx'
import RegistroInteracciones from './components/RegistroInteracciones.jsx'
import BusquedaDinamica from './components/BusquedaDinamica.jsx'
import RegistroAcceso from './components/RegistroAcceso.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PerfilEstudiante />
    <CursosDisponibles />
    <RegistroInteracciones />
    <BusquedaDinamica />
    <RegistroAcceso />
  </StrictMode>,
)
