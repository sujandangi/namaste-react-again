import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const uniqueCartItems = Array.from(new Set(cartItems))

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log("cart: cartitems: ", cartItems)
    console.log("cart: uniquecartitems: ", uniqueCartItems)
    return (
        <>
            <button onClick={handleClearCart}>Clear Cart</button>
            <div className="cartItemContainer">
                {uniqueCartItems.map((item, index) => (
                    // <p key={index}>{item.name}</p>
                    <CartItem cartItem={item} key={index} />
                ))}
            </div>
        </>
    )
}

export default Cart
