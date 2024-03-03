import React from "react"
import { SWIGGY_MEDIA_ASSETS } from "../utils/constants"

const RestaurantCard = ({ resDetails }) => {
    console.log("RestaurantCard: ", resDetails)
    const { name, avgRating, sla, costForTwo } = resDetails?.info
    return (
        <div className="restaurantCard">
            <img
                alt="res-image"
                src={SWIGGY_MEDIA_ASSETS + resDetails?.info?.cloudinaryImageId}
            />
            <div className="restaurantDescription">
                <ul>
                    <li>
                        <h3>{name}</h3>
                    </li>
                    <li>
                        <p>{avgRating}</p>
                    </li>
                    <li>
                        <p>{sla?.slaString}</p>
                    </li>
                    <li>
                        <p>{costForTwo}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantCard
