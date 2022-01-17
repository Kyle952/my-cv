import React from 'react'
import "./introduccion.css"
import yo from "../../assets/img/yo23.png"

const Introduccion = () => {
    return (
        <div className="intro">
            <div className="lado-izquierdo">
                <div className="contenedor-lado-izquierdo">
                    <h2 className="intro-saludo">Hola, Mi nombre es</h2>
                    <h1 className="intro-nombre">Kyle Cardona</h1>
                    <div className="intro-titulo">
                        <div className="contenedor-titulos">
                            <div className="titulo-item">Ingeniero De Sistemas</div>
                            <div className="titulo-item">Desarrollador Web</div>
                            <div className="titulo-item">Desarrollador Front-End</div>
                        </div>
                    </div>
                    <div className="intro-descripcion">
                    Ingeniero de Sistemas con habilidades blandas basadas en el respeto, la transparencia y lealtad con las personas que forman parte del grupo de trabajo, amante del trabajo en equipo y la colaboracion.
                    </div>
                </div>
            </div>
            <div className="lado-derecho">
                <div className="fondo-lado-derecho"></div>
                <img src={yo} alt="" className="mi-imagen" />
            </div>
        </div>
    )
}

export default Introduccion
