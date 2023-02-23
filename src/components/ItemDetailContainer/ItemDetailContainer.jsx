import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../firebase/firebase';

export const ItemDetailContainer = () => {

    const [producto , setProducto] = useState([])

    const {id} = useParams()

    useEffect(() => {
        getProduct(id)
        .then(item =>  setProducto(item))
    }, [])

    return (

        <div className='card my-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}