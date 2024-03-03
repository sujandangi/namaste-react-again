import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../utils/cartSlice"

const ItemCounter = ({ item }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)

    const itemCount = cartItems?.filter(
        (cartItem) => cartItem.id === item.id
    )?.length

    const handleAddItem = (i) => {
        console.log("itemcounter: i: ", i)
        dispatch(addItem(i))
    }

    const handleRemoveItem = (i) => {
        console.log("itemcaounter: remove: ", i)
        dispatch(removeItem(i))
    }

    return (
        <div className="itemCounter">
            <button onClick={() => handleRemoveItem(item)}>-</button>
            <h3>{itemCount}</h3>
            <button onClick={() => handleAddItem(item)}>+</button>
        </div>
    )
}

export default ItemCounter
