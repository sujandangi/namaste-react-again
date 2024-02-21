const ResMenuCard = ({ menu }) => {
    // console.log(menu)
    return (
        <div>
            <div>
                <h1>{menu.name}</h1>
                {/* <p>{menu.description}</p> */}
            </div>
            <button>Click to expand</button>
            <div>
                Expand when button clicked
                <ul>
                    <li>Dish Item</li>
                    <li>Dish Item</li>
                    <li>Dish Item</li>
                    <li>Dish Item</li>
                </ul>
            </div>
        </div>
    )
}

export default ResMenuCard
