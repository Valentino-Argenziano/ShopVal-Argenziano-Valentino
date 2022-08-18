import { Item } from "../Item/Item"

const ItemList = ({ listProducts }) => {
    return (
        <div className="itemList">
            {listProducts.map(product => <Item key={product.id} product={product} name={product.name}/>)}
        </div>
    )
}

export { ItemList }