import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <Link to="/">
                    <img
                        alt="Logo"
                        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-e28d2fe026c8df7d1e4bf636c33d954c_screen.jpg?ts=1595420913"
                    />
                </Link>
                <p>Location</p>
            </div>
            <div className="navMenu">
                <ul>
                    <Link to="/offers">
                        <li>Offers</li>
                    </Link>
                    <Link to="/help">
                        <li>Help</li>
                    </Link>
                    {/* <li>Sign In</li> */}
                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
