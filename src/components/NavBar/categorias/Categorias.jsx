import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-light'>Categorias</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/category/Muebles-Grandes'}>Muebles Grandes</Link></li>
                <li><Link className="dropdown-item" to={'/category/Muebles-Medianos'}>Muebles Medianos</Link></li>
                <li><Link className="dropdown-item" to={'/category/Muebles-Pequeños'}>Muebles chicos</Link></li>
            </ul>
        </li>
    );
}

export default Categorias;
