import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurantCards from "./src/components/RestaurantCards"
import About from "./src/components/About"
import Error from "./src/components/Error"
import Help from "./src/components/Help"
import Offers from "./src/components/Offers"
import Cart from "./src/components/Cart"
import RestaurantMenu from "./src/components/RestaurantMenu"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <RestaurantCards /> },
            { path: "/about", element: <About /> },
            { path: "/help", element: <Help /> },
            { path: "/offers", element: <Offers /> },
            { path: "/cart", element: <Cart /> },
            { path: "/restaurants/:id", element: <RestaurantMenu /> },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
