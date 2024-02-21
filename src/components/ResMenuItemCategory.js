import { useState } from "react"
import ResMenuItemSubCategory from "./ResMenuItemSubCategory"

const ResMenuItemCategory = ({ categoryCard }) => {
    const [showSubCategory, setShowSubcategory] = useState(false)
    console.log(categoryCard)
    return (
        <div className="itemCategoryCard">
            <div
                className="itemCategoryTitle"
                onClick={() => setShowSubcategory(!showSubCategory)}
            >
                <h2>{categoryCard?.card?.card?.title}</h2>
                <div>{showSubCategory ? "<" : ">"}</div>
            </div>
            {/* Render other details from categoryCard */}
            {showSubCategory ? (
                <div className="itemSubCategoryContainer">
                    {categoryCard.card?.card?.itemCards?.map(
                        (subCategoryCard) => (
                            <ResMenuItemSubCategory
                                subCategoryCard={subCategoryCard}
                                key={subCategoryCard?.card?.info?.name}
                            />
                        )
                    )}
                </div>
            ) : (
                ""
            )}
            <hr></hr>
        </div>
    )
}

export default ResMenuItemCategory
