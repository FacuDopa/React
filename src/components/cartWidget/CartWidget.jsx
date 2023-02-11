import { Link } from "react-router-dom";

const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
        <Link className="nav-link" to={'/Cart'}><button className='btn btn-outline-secondary'>Carrito</button></Link>
        <p>{cantidadCarrito}</p>
        </>
    );
}

export default CartWidget;
