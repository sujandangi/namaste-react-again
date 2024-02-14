export default ShimmerCards = ({}) => {
    return (
        <div className="shimmerCards">
            {Array(10)
                .fill()
                .map((arr) => (
                    <ShimmerCard key={Math.random()} />
                ))}
        </div>
    )
}

const ShimmerCard = () => {
    return (
        <div className="shimmerCard">
            <div className="shimmerImg"></div>
            <div className="shimmerDescription">
                <h1></h1>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}
