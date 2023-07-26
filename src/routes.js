import { createBrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Maintain from "./pages/Maintain";
import ErrorPage from "./pages/ErrorPage";


export const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/",
        element: <NavigationBar />,
        children: [
            {
                path: "",
                element: <Sidebar />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },

                    {
                        path: "category",
                        element: <Category />
                    },

                    {
                        path: "maintain",
                        element: <Maintain />
                    }
                ]
            }
        ]
    },

    {
        path: '/*',
        element: <ErrorPage />
    }
])