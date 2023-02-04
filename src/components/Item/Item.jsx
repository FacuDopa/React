import { Link } from "react-router-dom";

export const Item = ({item}) => {
    return (
        <div className="card mb-3 card-producto" style={{width: '20rem'}}>
            <img src={`../img/${item.imagenCard}`} className="card-img-top mt-2 rounded" alt={`${item.nombre} en madera`} height={300}/>
                <div className="card-body card--body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text mb-0">{item.descripcion}</p>
                </div>
                <div className="precio-cards ">
                    <p>$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                </div>
                <div className="div-boton-cards">
                    <button className="btn btn-dark"><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
                </div>
        </div>
    );
}