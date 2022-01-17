import React from 'react'
import "./proyecto.css"
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Proyecto = ({nombre,img,link}) => {
    const tema = useContext(ThemeContext);
    const modoOscuro = tema.state.modoOscuro;
    return (
        <div className="cont-proyecto">
            <div className="vent-proyecto">
                <h3 style={{backgroundColor: modoOscuro && "#333"}} className="proyecto-title">{nombre}</h3>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="proy-img" />
            </a>
        </div>
    )
}

export default Proyecto
