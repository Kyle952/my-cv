import React from 'react'
import "./tecnologia.css"

const Tecnologia = ({img,nombre}) => {
    return (
        <div className="contenedor-tec">
            <div className="ventana-tec">
                <h3 className="titulo-tec">{nombre}</h3>
            </div>
            <img src={img} alt="" className="tec-img" />
        </div>
    )
}

export default Tecnologia
