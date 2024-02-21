import React from "react"
import { SWIGGY_MEDIA_ASSETS } from "../utils/constants"

const RestaurantCard = ({ resDetails }) => {
    console.log("RestaurantCard: ", resDetails)
    return (
        <div className="restaurantCard">
            <img
                alt="res-image"
                src={SWIGGY_MEDIA_ASSETS + resDetails?.info?.cloudinaryImageId}
            />
            <div className="restaurantDescription">
                <ul>
                    <li>{resDetails?.info?.name}</li>
                    <li>{resDetails?.info?.avgRating}</li>
                    <li>{resDetails?.info?.sla?.slaString}</li>
                    <li>{resDetails?.info?.costForTwo}</li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantCard
