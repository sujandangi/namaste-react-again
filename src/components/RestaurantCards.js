import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { SWIGGY_API } from "../utils/constants"
import ShimmerCards from "./ShimmerCards"
import { Link } from "react-router-dom"

const RestaurantCards = () => {
    let [restaurants, setRestaurants] = useState([])
    let [searchedRestaurants, setSearchedRestaurants] = useState([])
    let [filteredRestaurants, setFilteredRestaurants] = useState([])
    let [searchValue, setSearchValue] = useState("")
    let [isFiltered, setIsFiltered] = useState(false)
    let [isSearched, setIsSearched] = useState(false)

    const handleSearch = () => {
        setIsSearched(true)
        setIsFiltered(false)
        console.log("searchbtn clicked", isSearched)
        setSearchedRestaurants(
            restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        )
    }

    const handleFilter = () => {
        setIsFiltered(true)
        setIsSearched(false)
        console.log("filterbtn clicked", isFiltered)
        setFilteredRestaurants(
            restaurants.filter((res) => res.info.avgRating > 4)
        )
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(SWIGGY_API)
                const json = await response.json()
                console.log(json)
                const resList =
                    json.data.cards[1].card.card.gridElements.infoWithStyle
                        .restaurants
                setRestaurants(resList)
                console.log("from res cards, main api call: ", json.data.cards)
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
                ) : isFiltered ? (
                    filteredRestaurants.map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                        >
                            <RestaurantCard res={res} />
                        </Link>
                    ))
                ) : isSearched ? (
                    searchedRestaurants.map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                        >
                            <RestaurantCard res={res} />
                        </Link>
                    ))
                ) : (
                    restaurants.map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                        >
                            <RestaurantCard res={res} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default RestaurantCards
