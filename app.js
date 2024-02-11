import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { useState, useEffect } from "react"

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img alt="Logo" src="" />
                <p>Location</p>
            </div>
            <div className="navMenu">
                <ul>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const SearchRestaurants = () => {
    let [searchValue, setSearchValue] = useState("")

    return (
        <div className="searchContainer">
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button>Search</button>
        </div>
    )
}

const RestaurantCard = ({ res }) => {
    return (
        <div className="restaurantCard">
            <img alt="res-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.info.cloudinaryImageId}`}/>
            <div className="restaurantDescription">
                <ul> 
                    <li>{res.info.name}</li>
                    <li>{res.info.avgRating}</li>
                    <li>{res.info.sla.slaString}</li>
                    <li>{res.info.costForTwo}</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCards = () => {
    let [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370');
                const json = await response.json();
                // console.log(json);
                // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info.name);
                setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Restaurants state updated now (second useEffect)")
        console.log("second useEffect", restaurants)
    }, [restaurants])

    return (
        <div className="restaurantCardsContainer">
            {restaurants.map(res => {
                return <RestaurantCard res={res} key={res.info.id} />
            })}
        </div>
    )
}

const RestaurantContainer = () => {
    return (
        <div>
            <SearchRestaurants />
            <RestaurantCards />
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footerContainer">Footer</div>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <RestaurantContainer />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)