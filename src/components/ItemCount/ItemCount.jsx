import { useState } from "react";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const ItemCount = ({valIicial, stock}) => {
    const [contador, setContador] = useState(valIicial)
          //variable    //modificar var    //estado inicial

    const {darkMode} = useDarkModeContext()

    const sumar = () => (contador < stock) && setContador(contador + 1);
    const restar = () => (contador > valIicial) && setContador(contador - 1);
    return (
        <>
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} me-3 rounded-pill`} onClick={() => restar() }>-</button>
                {contador}
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-outline-secondary'} ms-3 rounded-pill`} onClick={() => sumar() }>+</button>
        </>
    );
}

export default ItemCount;
