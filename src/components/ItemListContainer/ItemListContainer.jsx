import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase';

//context


const ItemListContainer = () => {

    const [productos , setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {
        if(idCategoria) {
            getProducts()
            .then(items => {
                const products = items.filter(prod => prod.idCategoria === idCategoria)
                const productsList = <ItemList products={products} plantilla={'item'}/>
                setProductos(productsList)
            })
        }else{
            getProducts()
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