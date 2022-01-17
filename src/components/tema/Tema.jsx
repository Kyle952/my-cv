import React from 'react'
import "./tema.css"
import Sol from "../../assets/img/sun.png"
import Luna from "../../assets/img/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Tema = () => {
    const tema = useContext(ThemeContext);
    const controlarClick = () => {
        tema.dispatch({type: "CAMBIAR" });
    };
    return (
        <div className="cambiador-tema">
            <img src={Sol} alt="" className="icono-tema" />
            <img src={Luna} alt="" className="icono-tema" />
            <div className="boton-tema" onClick={controlarClick} style={{left: tema.state.modoOscuro ? 0 : 25}} ></div>
        </div>
    )
}

export default Tema
