import React from 'react'
import "./contacto.css"
import Telefono from "../../assets/img/telephone.png"
import Email from "../../assets/img/email.png"
import Direccion from "../../assets/img/address.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contacto = () => {
    //se hace uso del hook useRef, para poder guardar la informacion ingresada en el form
    const formRef = useRef()

    //se define una arrow function que permitira enviar al servidor de correo, los datos ingresados en el form
    const controlarEnvio = (e)=>{
        e.preventDefault();//asi se previene que la pagina se recargue al ejecutar este metodo
        
        emailjs.sendForm(
            'service_35lyb08',
            'template_6ku9hei',
            formRef.current,//se llama a la variable del useRef
            'user_ec5RBwCbHrpQih25GWinO'
            )
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="contenedor-contacto">
            <div className="fondo-contacto"></div>
            <div className="separador-contacto">
                <div className="subc-izq">
                    <h1 className="contacto-titulo">Quieres contactarme:</h1>
                    <div className="contacto-info">
                        <div className="info-elemento">
                            <img
                              src={Telefono}
                              alt=""
                              className="contacto-imagen"
                            />
                            +57 3053667665
                        </div>
                        <div className="info-elemento">
                            <img
                              src={Email}
                              alt=""
                              className="contacto-imagen"
                            />
                            kylecardona.95@gmail.com
                        </div>
                        <div className="info-elemento">
                            <img
                              src={Direccion}
                              alt=""
                              className="contacto-imagen"
                            />
                            Calle 39 # 89-09, Medellin - Colombia
                        </div>
                    </div>
                </div>
                <div className="subc-der">
                    <p className="mensaje-form">
                        Ok, Vamos a hablar un poco.
                    </p>
                    {/**se llama a la variable del useRef para que los datos ingresados en el form puedan hacer uso del hook useRef, tambien se crea el metodo que permitira enviar al servidor de correo los datos igresados en el form*/}
                    <form ref={formRef} onSubmit={controlarEnvio}>
                        <input type="text" placeholder="Nombre" name="user_name" />
                        <input type="text" placeholder="Asunto" name="user_subject" />
                        <input type="text" placeholder="Correo" name="user_email" />
                        <textarea placeholder="Mensaje" name="message" rows="5"></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacto
