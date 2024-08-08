import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../Application/Page/Public/HomePage.tsx";
import {LoginPage} from "../Application/Page/Public/LoginPage.tsx";
import {DashboardPage} from "../Application/Page/Private/DashboardPage.tsx";
import {RegisterPage} from "../Application/Page/Public/RegisterPage.tsx";
import {CreateRecipePage} from "../Application/Page/Private/CreateRecipePage.tsx";
import {MyRecipePage} from "../Application/Page/Private/MyRecipePage.tsx";
import {LayoutPublic} from "../Application/Page/Public/LayoutPublic.tsx";
import {LayoutPrivate} from "../Application/Page/Private/LayoutPrivate.tsx";

export const router = createBrowserRouter([
    // routes public
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ]
    },
    
    // routes privé
    {
        path: "/dashboard",
        element: <LayoutPrivate/>,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "create-rc",
                element: <CreateRecipePage />,
            },
            {
                path: "my-rc",
                element: <MyRecipePage />,
            }
        ]
    }
]);
