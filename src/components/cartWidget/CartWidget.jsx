import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

const CartWidget = () => {

    const {getItemQuantity} = useCarritoContext()
    
    return (
        <>
        <Link className="nav-link" to={'/Cart'}>
            <button className='btn btn-outline-secondary'>Carrito</button>
            {getItemQuantity () > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
        </>
    );
}

export default CartWidget;
