import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const params = useParams()
    console.log("params: ", params)
    return <div>RestaurantMenu {params.id}</div>
}

export default RestaurantMenu
