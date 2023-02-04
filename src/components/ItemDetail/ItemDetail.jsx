import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {
    return (
        <div className='row'>
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
                    <button className='btn btn-secondary mt-2 container'>Finalizar Compra</button>
                    <button className='btn btn-outline-light mt-2'> <Link className='nav-link' to={'/'}>Volver al Inicio</Link></button>
                </div>
            </div>
        </div>
    );
}