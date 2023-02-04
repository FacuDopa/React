const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{cantidadCarrito}</p>
        </>
    );
}

export default CartWidget;
