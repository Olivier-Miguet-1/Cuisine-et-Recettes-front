import {NavLink, Outlet} from "react-router-dom";
import {AppShell, useMantineTheme} from "@mantine/core";

export const LayoutPrivate = () => {
    const theme = useMantineTheme();
    
    return (
        <>
           <AppShell
               navbar={{
                   width: 300,
                   breakpoint: 'sm',
               }}
           >
               {/* navbar */}
               <AppShell.Navbar
                   style={{ backgroundColor: theme.colors.green[5] }}
               >
                   <NavLink to={"/"}>Accueil</NavLink>
                   <NavLink to={"/dashboard"}>Tableau de bord</NavLink>
                   <NavLink to={"/dashboard/create-rc"}>Creer une recette</NavLink>
               </AppShell.Navbar>
               
               {/* contenu de la page */}
               <AppShell.Main>
                   <Outlet />
               </AppShell.Main>
               
           </AppShell>
        </>
    );
}
