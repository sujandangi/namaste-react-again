import React from "react"
import { SWIGGY_MEDIA_ASSETS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"
import ItemCounter from "./ItemCounter"

const ResMenuItemSubCategory = ({ subCategoryCard }) => {
    // console.log(subCategoryCard?.card?.info)

    return (
        <>
            <div className="dishCardContainer">
                <div className="dishDescription">
                    <h3>{subCategoryCard?.card?.info?.name}</h3>
                    <p>
                        ₹{" "}
                        {(subCategoryCard?.card?.info?.price / 100) |
                            (subCategoryCard?.card?.info?.defaultPrice / 100)}
                    </p>
                    <p>{subCategoryCard?.card?.info?.description}</p>
                </div>
                <div className="dishImage">
                    <img
                        src={
                            SWIGGY_MEDIA_ASSETS +
                            subCategoryCard?.card?.info?.imageId
                        }
                        alt="dish image"
                    ></img>
                    {/* <button
                        onClick={() =>
                            handleAddItem(subCategoryCard?.card?.info)
                        }
                    >
                        ADD
                    </button> */}
                    <ItemCounter item={subCategoryCard?.card?.info} />
                </div>
            </div>
        </>
    )
}

export default ResMenuItemSubCategory
