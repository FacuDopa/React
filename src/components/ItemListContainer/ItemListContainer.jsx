import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

//context
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemListContainer = () => {

    const [productos , setProductos] = useState([])
    const {idCategoria} = useParams()
    const {darkmode} = useDarkModeContext()

    useEffect(() => {
        if(idCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === idCategoria)
                const productsList = <ItemList products={products} plantilla={'item'}/>
                setProductos(productsList)
            })
        }else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
        
                const productsList = <ItemList products={products} plantilla={'item'}/>
                setProductos(productsList)
            })
        }

    }, [idCategoria])
    
    return (

        <div className='row card-productos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
