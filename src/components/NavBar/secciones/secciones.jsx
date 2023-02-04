import { Link } from "react-router-dom";

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
            <Link className="nav-link active" to={'/'}><button className='btn btn.light'>Inicio</button></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={'/contacto'}><button className='btn btn.light'>Contacto</button></Link>
        </li>
        </>
    );
}

export default Secciones;
