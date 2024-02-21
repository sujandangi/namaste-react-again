import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { SWIGGY_API } from "../utils/constants"
import ShimmerCards from "./ShimmerCards"
import { Link } from "react-router-dom"

const RestaurantCards = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchedRestaurants, setSearchedRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [isFiltered, setIsFiltered] = useState(false)
    const [isSearched, setIsSearched] = useState(false)

    const handleSearch = () => {
        const lowerCaseSearchValue = searchValue.toLowerCase()
        const searched = restaurants.filter((res) =>
            res.info.name.toLowerCase().includes(lowerCaseSearchValue)
        )
        setSearchedRestaurants(searched)
        setIsFiltered(false)
        setIsSearched(true)
    }

    const handleFilter = () => {
        const filtered = restaurants.filter((res) => res.info.avgRating > 4.3)
        setFilteredRestaurants(filtered)
        setIsSearched(false)
        setIsFiltered(true)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(SWIGGY_API)
                const json = await response.json()
                // console.log(json)
                const resList =
                    json?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants

                setRestaurants(resList)
                // console.log("from res cards, main api call: ", json.data.cards)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="restaurantContainer">
            <div>
                <div className="searchContainer">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            console.log(searchValue)
                        }}
                    />
                    <button className="searchBtn" onClick={handleSearch}>
                        Search
                    </button>
                    <button className="filterBtn" onClick={handleFilter}>
                        Top rated restaurants
                    </button>
                </div>
            </div>
            <div className="restaurantCardsContainer">
                {restaurants.length === 0 ? (
                    <ShimmerCards />
                ) : (
                    (isFiltered
                        ? filteredRestaurants
                        : isSearched
                        ? searchedRestaurants
                        : restaurants
                    ).map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                        >
                            <RestaurantCard resDetails={res} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default RestaurantCards
