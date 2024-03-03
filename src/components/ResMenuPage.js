import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SWIGGY_MENU_API } from "../utils/constants"
import ResMenuResInfo from "./ResMenuResInfo"
import ResMenuResOffers from "./ResMenuResOffers"
import ResMenuItemCategory from "./ResMenuItemCategory"
import ResMenuResLicense from "./ResMenuResLicense"

const ResMenuPage = () => {
    const resId = useParams().id
    const [restaurantData, setRestaurantData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(SWIGGY_MENU_API + resId)
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await response.json()
                setRestaurantData(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchRestaurantData()
    }, []) // Empty dependency array means this effect will only run once on mount

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    const restaurantInfo = restaurantData?.data?.cards?.find(
        (card) =>
            card.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info

    // Extract menu items
    const itemCategoryCards =
        restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) =>
                card.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    // console.log("ResMenuPage: RestaurantData: ", restaurantData)
    // console.log("ResMenuPage: RestaurantInfor: ", restaurantInfo)
    // console.log("ResMenuPage: menuCards: ", itemCategoryCards)

    return (
        <div className="resMenuPage">
            <div className="restaurantInfoContainer">
                <ResMenuResInfo restaurantInfo={restaurantInfo} />
            </div>
            {/* <div className="restaurantOffersContainer">
                <ResMenuResOffers />
            </div> */}
            <div className="menuContainer">
                {itemCategoryCards?.map((categoryCard) => (
                    <ResMenuItemCategory
                        categoryCard={categoryCard}
                        key={categoryCard.card?.card?.title}
                    />
                ))}
            </div>
            {/* <div className="restaurantLicenseContainer">
                <ResMenuResLicense />
            </div> */}
        </div>
    )
}

export default ResMenuPage
