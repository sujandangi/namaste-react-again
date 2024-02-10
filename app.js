import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React CDN")

const root = ReactDOM.createRoot(document.getElementById("root"))

// React functional component
const HeadingComponent = () => {
    return (
        <div>
            <h2>I am react functional component.</h2>
        </div>
    )
}

// React Element. We can nest a component inside an element and vice versa.
const jsxHeading = <div id="heading">I am JSX/React element!
    <HeadingComponent />
</div>

root.render(jsxHeading)