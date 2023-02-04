import { useState } from "react";

export const ItemCount = ({valIicial, stock}) => {
    const [contador, setContador] = useState(valIicial)
          //variable    //modificar var    //estado inicial

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valIicial) && setContador(contador - 1);
    return (
        <>
            <button className='btn btn-dark me-3' onClick={() => restar() }>-</button>
                {contador}
            <button className='btn btn-dark ms-3' onClick={() => sumar() }>+</button>
        </>
    );
}

export default ItemCount;
