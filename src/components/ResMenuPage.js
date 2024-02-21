import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SWIGGY_MENU_API } from "../utils/constants"
import ResMenuResInfo from "./ResMenuResInfo"
import ResMenuResOffers from "./ResMenuResOffers"
import ResMenuItemCategory from "./ResMenuItemCategory"
import ResMenuResLicense from "./ResMenuResLicense"

// const ResMenuPage = () => {
//     const [resInfo, setResInfo] = useState(null)
//     const [resMenuCards, setResMenuCards] = useState([])
//     const resId = useParams().id
//     console.log("ResMenu: resId: ", resId)
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(SWIGGY_MENU_API + resId)
//                 const json = await response.json()
//                 console.log(
//                     "resMenuCards:",
//                     json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR
//                         ?.cards[2]
//                 )
//                 console.log("json: ", json)
//                 setResMenuCards(
//                     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
//                         ?.cards
//                 )

//                 setResInfo(json?.data?.cards[0]?.card?.card?.info)
//             } catch (error) {
//                 console.error("Error fetching data:", error)
//             }
//         }
//         fetchData()
//     }, [])

//     // console.log("resMenuCards[0]: ", resMenuCards[0])
//     // console.log("resMenuCards[1]: ", resMenuCards[1])
//     // console.log("resMenuCards[2]: ", resMenuCards[2])
//     // console.log("resMenuCards[All]: ", resMenuCards)
//     return (
//         <div className="resMenuContainer">
//             <h1>RestaurantMenu: {resId}</h1>
//             <h2>{resInfo?.name}</h2>
//             <hr></hr>
//             <div className="">
//                 {/* {resMenuCards[2]?.card?.card?.itemCards.map((item) => (
//                     // <h4 key={item?.card?.info?.id}>{item?.card?.info?.name}</h4>
//                     <ResMenuCard
//                         key={item?.card?.info?.id}
//                         menu={item?.card?.info}
//                     />
//                 ))} */}
//                 {resMenuCards?.map((card) => {
//                     return (
//                         <h1>
//                             {card?.card?.card?.title}
//                             <span>({card?.card?.card?.itemCards?.length})</span>
//                         </h1>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

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

    //
    const restaurantInfo = restaurantData?.data?.cards?.find(
        (card) =>
            card.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info

    // Extract menu items
    const itemCategoryCards =
        restaurantData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (card) =>
                card.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

    console.log("ResMenuPage: RestaurantData: ", restaurantData)
    console.log("ResMenuPage: RestaurantInfor: ", restaurantInfo)
    console.log("ResMenuPage: menuCards: ", itemCategoryCards)

    return (
        <div className="resMenuPage">
            {/* Need 4 componets
            <RestaurantInfo /> "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
            <Offers /> "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
            <MenuFilter /> "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
            <MenuCategory /> "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                 > <MenuSubCategory /> "type.googleapis.com/swiggy.presentation.food.v2.Dish"
            <RestaurantLicense /> "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
            <RestaurantAddress /> "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
        */}
            <div className="restaurantInfoContainer">
                <ResMenuResInfo restaurantInfo={restaurantInfo} />
            </div>
            <div className="restaurantOffersContainer">
                <ResMenuResOffers />
            </div>
            <div className="menuContainer">
                {itemCategoryCards.map((categoryCard) => (
                    <ResMenuItemCategory
                        categoryCard={categoryCard}
                        key={categoryCard.card?.card?.title}
                    />
                ))}
            </div>
            <div className="restaurantLicenseContainer">
                <ResMenuResLicense />
            </div>
        </div>
    )
}

export default ResMenuPage
