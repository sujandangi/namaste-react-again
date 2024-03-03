import React from "react"

const ResMenuResInfo = ({ restaurantInfo }) => {
    console.log("resinfo: ", restaurantInfo)
    const {
        name,
        areaName,
        avgRating,
        costForTwoMessage,
        cuisines,
        sla,
        totalRatings,
        feeDetails,
    } = restaurantInfo
    return (
        <>
            <h1 className="resInfoHeading">{name}</h1>
            <div className="resInfoCard">
                <div className="resInfoDescription">
                    <div className="resInfoName">{name}</div>
                    <div className="resInfoCuisines">{cuisines.join(",")}</div>
                    <div className="resInfoAddress">{areaName}</div>
                </div>
                <div className="resInfoRatingCard">
                    <div className="ratingStar">✩ {avgRating}</div>
                    <hr></hr>
                    <div className="totalRatings">{totalRatings}</div>
                </div>
            </div>
            <div className="resInfoDelivery">
                <ul>
                    <li>
                        <span>{sla.minDeliveryTime} Minutes</span>
                    </li>
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default ResMenuResInfo
