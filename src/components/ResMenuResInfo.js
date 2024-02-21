import React from "react"

const ResMenuResInfo = ({ restaurantInfo }) => {
    console.log("resinfo: ", restaurantInfo)
    return (
        <>
            <h1 className="resInfoHeading">{restaurantInfo.name}</h1>
            <div className="resInfoCard">
                <div className="resInfoDescription">
                    <div className="resInfoName">{restaurantInfo.name}</div>
                    <div className="resInfoCuisines">Cuisines</div>
                    <div className="resInfoAddress">Address</div>
                </div>
                <div className="resInfoRatingCard">
                    <div className="ratingStar">
                        ✩ {restaurantInfo.avgRatingString}
                    </div>
                    <hr></hr>
                    <div className="totalRatings">5k Ratings</div>
                </div>
            </div>
            <div className="resInfoDelivery">
                <ul>
                    <li>
                        <span>Bike Logo</span>distance |
                    </li>
                    <li className="px-2">Delivery fees</li>
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default ResMenuResInfo
