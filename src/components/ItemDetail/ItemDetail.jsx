import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';

export const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
    return (
        <div className={`row card-Body ${darkMode && 'card-dark'}`}>
            <div className="col-md-4 my-2">
                <img src={`../img/${item.imagenCard}`} alt="imagen de {item.nombre}" className='img-fluid'/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className='card-text'>{item.descripcion}</p>
                    <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount valIicial={1} stock={item.stock}/>
                    <button className={`btn ${darkMode ? 'btn-success' : 'btn-outline-success'} mt-2 container rounded-pill`}>Finalizar Compra</button>
                    <Link className='nav-link' to={'/'}><button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} mt-2 rounded-pill`}>Volver al Inicio</button></Link>
                </div>
            </div>
        </div>
    );
}