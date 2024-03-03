import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SWIGGY_MENU_API } from "../utils/constants"

const RestaurantMenu = () => {
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(SWIGGY_MENU_API)
                const json = await response.json()
                console.log(json)
                // const resList =
                //     json.data.cards[1].card.card.gridElements.infoWithStyle
                //         .restaurants
                // setRestaurants(resList)
                // console.log("from res cards, main api call: ", json.data.cards)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    const params = useParams()
    // console.log("params: ", params)
    return <div>RestaurantMenu {params.id}</div>
}

export default RestaurantMenu
