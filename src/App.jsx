import React from 'react'
import { useContext } from 'react'
import Introduccion from './components/introduccion/Introduccion'
import Tecnologias from './components/tecnologias/Tecnologias'
import Proyectos from './components/proyectos/Proyectos'
import Contacto from './components/contacto/Contacto'
import Tema from './components/tema/Tema'
import { ThemeContext } from './context'

function App() {
  const tema = useContext(ThemeContext);
  const modoOscuro = tema.state.modoOscuro;
  return (
    <div style={{backgroundColor: modoOscuro ? "#222" : "white", color: modoOscuro && "white"}}>
      {/**se importan en el modulo raiz los componentes que se renderizaran en la pantalla */}
      <Tema/>
      <Introduccion/>
      <Tecnologias/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}

export default App
