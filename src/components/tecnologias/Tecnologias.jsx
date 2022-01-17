import React from 'react'
import "./tecnologias.css"
import Tecnologia from "../tecnologia/Tecnologia"
import {tecnologias} from "../../data"

const Tecnologias = () => {
    return (
        <div className="contenedor-tecs">
            <div className="tecs-texto">
                <h1 className="tecs-titulo">Herramientas y Tecnologias Usadas</h1>
                <p className="tecs-descripcion">
                    Las siguientes son las tecnologias que manejo y domino
                     en cierto nivel para desarrollar todos los proyectos y
                      con las cuales tengo mucho interes en profundizar y aprender mucho mas sobre ellas.
                </p>
            </div>
            <div className="lista-tecs">
                {tecnologias.map((item) => (
                    <Tecnologia key={item.id} img={item.img} nombre={item.nombre} />
                ))}
            </div>
        </div>
    )
}

export default Tecnologias
