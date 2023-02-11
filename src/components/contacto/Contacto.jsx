import React from "react";
import { useNavigate } from "react-router-dom";
import {toast, Toast} from 'react-toastify'

export const Contacto = () => {
    const datosformulario = React.useRef() //creo la referencia
    let navigate = useNavigate() //ubicacion actual del componente 

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosformulario.current); //consulto el estado actual del form
        const datForm = new FormData(datosformulario.current) //Genero un objeto iterator de esos datos
        console.log(datForm);
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto litaral
        console.log(contacto);
        e.target.reset() //reseteo el formulario
        navigate('/') //redirijo a pag inicial
        toast.success('hola')
    }

    return (
        <div className="container mt-3">
            <form onSubmit={consultarFormulario} ref={datosformulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero Telefonico</label>
                    <input type="number" className="form-control" name="celular"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="consulta" className="form-label">Consulta</label>
                    <textarea className="form-control" rows={3} name="consulta"/>
                </div>
                <button type="submit" className="btn btn-outline-secondary">Enviar</button>
            </form>

        </div>
    );
}
