import {NavLink, Outlet, useLocation} from "react-router-dom";
import {ButtonPrimary} from "../../Component/ButtonPrimary.tsx";
import {Title, useMantineTheme} from "@mantine/core";

export const LayoutPublic = () => {
    // recuperation du theme mantine
    const theme = useMantineTheme();
    
    // object de react router pour avoir des informations sur la navigation en cours
    const location = useLocation()
    
    return (
        <>
            <header
                style={{
                    backgroundColor: theme.colors.green[5]
                }}
                className={"bg-red-500 flex justify-between px-8 py-4 items-center"}
            >
                <Title order={1}>Cusine & Recette</Title>
                <NavLink to={location.pathname === "/login" ? "/" : "/login"}>
                    {
                        location.pathname === "/login" ? (
                            <ButtonPrimary>Retour Accueil</ButtonPrimary>
                        ) : (
                            <ButtonPrimary>Se connecter</ButtonPrimary>
                        )
                    }
                </NavLink>
            </header>
            
            <main>
                <Outlet/>
            </main>
        </>
    )
}
