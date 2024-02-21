import ItemCounter from "./ItemCounter"
import { useSelector } from "react-redux"

const CartItem = ({ cartItem }) => {
    const { name, price, defaultPrice, isVeg } = cartItem

    const cartItemsFromStore = useSelector((store) => store.cart.items)
    const itemCount = cartItemsFromStore?.filter(
        (cartItemFromStore) => cartItemFromStore.id === cartItem.id
    )?.length

    return (
        <div className="cartItemCard">
            <div>
                <ItemCounter item={cartItem} />
            </div>
            <h3>{name}</h3>

            <div>
                Rs.{" "}
                {((price / 100) * itemCount) |
                    ((defaultPrice / 100) * itemCount)}
            </div>
        </div>
    )
}

export default CartItem
