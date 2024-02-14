import React from "react"

const RestaurantCard = ({ res }) => {
    console.log(res)
    return (
        <div className="restaurantCard">
            <img
                alt="res-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res.info.cloudinaryImageId}`}
            />
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

export default RestaurantCard
