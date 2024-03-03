import React from "react"
import { Link } from "react-router-dom"
import { useOnlineStatus } from "../utils/hooks"
import { useSelector } from "react-redux"

const Header = () => {
    const onlineStatus = useOnlineStatus()
    // console.log("header:onlinestatus: ", onlineStatus)
    const cartItems = useSelector((store) => store.cart.items)
    // console.log("header: cartitems: ", cartItems)

    return (
        <div className="header">
            <div className="logoContainer">
                <Link to="/">
                    <img
                        alt="Logo"
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-e28d2fe026c8df7d1e4bf636c33d954c_screen.jpg?ts=1595420913"
                    />
                </Link>
            </div>
            <div className="navMenu">
                <ul>
                    <Link to="/offers">
                        <li>Offers</li>
                    </Link>

                    {/* <li>Sign In</li> */}
                    <Link to="/cart">
                        <li>Cart: {cartItems.length}</li>
                    </Link>
                    <li>{onlineStatus ? "" : "offline 🖲️"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
