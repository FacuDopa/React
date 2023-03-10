import { Item } from '../Item/Item';
import { ItemCart } from '../ItemCart/ItemCart';

const ItemList = ({products, plantilla}) => {
    console.log({plantilla})
    return (
        <>
            {plantilla === 'item' 
                ? 
                    products.map(producto => <Item item={producto} key={producto.id}/>)
                :
                    products.map(producto => <ItemCart item={producto} key={producto.id}/>)
            }
        </>
    );
}

export default ItemList;
