import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const uniqueCartItems = Array.from(new Set(cartItems))
    const totalAmount = cartItems.reduce((total, cartItem) => {
        // Assuming each cartItem has a 'price' property
        return total + cartItem.price
    }, 0)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    console.log("cart: cartitems: ", cartItems)
    console.log("cart: uniquecartitems: ", uniqueCartItems)
    return (
        <div className="cartContainer">
            <div>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="cartItemContainer">
                {uniqueCartItems.length === 0
                    ? "Cart is Empty"
                    : uniqueCartItems.map((item, index) => (
                          // <p key={index}>{item.name}</p>
                          <CartItem cartItem={item} key={index} />
                      ))}
            </div>
            <div>
                Total Amount to Pay:{" "}
                {totalAmount === 0
                    ? "Buy Something!"
                    : "Rs. " + totalAmount / 100}
            </div>
        </div>
    )
}

export default Cart
