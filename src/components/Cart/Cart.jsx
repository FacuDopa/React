import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export const Cart = () => {
    const carrito = [
        {id: 1, nombre: 'Arroz', modelo: '1', precio: 400, cantidad: 5},
        {id: 2, nombre: 'Fideos', modelo: '2', precio: 300, cantidad: 7},
        {id: 3, nombre: 'Manteca', modelo: '3', precio: 500, cantidad: 10},
    ]

    return(
        <>
            { carrito.length === 0 
                ? // Si el carrito esta vacio -> la condicion es verdadera
                    <>
                        <h2>Carrito Vacio</h2>
                        <Link className='nav-link' to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
                    </>

                : // Si el carrito esta lleno -> la condicion es falsa
                    <div className="container cart-container">
                        {
                            <ItemList products={carrito}/>
                        }
                        <div className="div-button">
                            <p>Resumen de la compra: precio total</p>
                            <button className="btn btn-danger">Vaciar Carrito</button>
                            <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )
};

/* 
    Condicional N1 = 6 complejidad, 2 return 1 Condidional
    if(true) {
        return <p>Es Verdadero</p>
    }
    return <p>Es Falso</p>

-----------------------------------------------------------------------------

    Condicional N2 = 6 Complejidad, 1 return,  2 condicionales
    const condLogica = false
    return(
        <>
            {condLogica && <p>Es verdadero</p>}
            {!condLogica && <p>Es Falso</p>}
        </>
    )

-----------------------------------------------------------------------------

    Condicional N3 = 5 Complejidad, 1 return, 1 condicional(Ternario)
    const condLogica = true
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es Falso</p>}
        </>
    )
*/