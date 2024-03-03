import { useState } from "react"
import ResMenuItemSubCategory from "./ResMenuItemSubCategory"

const ResMenuItemCategory = ({ categoryCard }) => {
    const [showSubCategory, setShowSubcategory] = useState(false)
    // console.log("ResMenuItemsCategory: categoryCard: ", categoryCard)
    const subCategoryCards = categoryCard.card?.card?.itemCards
    const title = categoryCard?.card?.card?.title
    // console.log("ResMenuItemsCategory: subcategoryCard: ", subCategoryCards)

    return (
        <div className="itemCategoryCard">
            <div
                className="itemCategoryTitle"
                onClick={() => setShowSubcategory(!showSubCategory)}
            >
                <h2>{title}</h2>
                <div>{showSubCategory ? "<" : ">"}</div>
            </div>
            {/* Render other details from categoryCard */}
            {showSubCategory ? (
                <div className="itemSubCategoryContainer">
                    {subCategoryCards.map((subCategoryCard) => (
                        <ResMenuItemSubCategory
                            subCategoryCard={subCategoryCard}
                            key={subCategoryCard?.card?.info?.name}
                        />
                    ))}
                </div>
            ) : (
                ""
            )}
            <hr></hr>
        </div>
    )
}

export default ResMenuItemCategory
