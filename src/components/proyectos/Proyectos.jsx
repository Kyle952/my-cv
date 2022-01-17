import React from 'react'
import "./proyectos.css"
import Proyecto from '../proyecto/Proyecto'
import { proyectos } from '../../proyectos'

const Proyectos = () => {
    return (
        <div className="contenedor-proyectos">
            <div className="texto-proyectos">
                <h1 className="titulo-proyectos">Proyectos que he realizado.</h1>
                <p className="descripcion-proyectos">
                    Aqui podras ver algunos de los proyectos que he realizado tanto con Angular como con React.
                </p>
            </div>
            <div className="lista-proyectos">
                {proyectos.map((item) => (
                    <Proyecto key={item.id} nombre={item.nombre} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default Proyectos
