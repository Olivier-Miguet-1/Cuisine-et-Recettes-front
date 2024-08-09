import {NavLink, Outlet} from "react-router-dom";
import {AppShell, useMantineTheme} from "@mantine/core";

export const MyRecipePage = () => {
    const theme = useMantineTheme();

    return (
        <>
            <h1>page liste mes recettes</h1>
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
                   <NavLink to={"/dashboard/create-rc"}>Créer une recette</NavLink>
               </AppShell.Navbar>

               {/* contenu de la page */}
               <AppShell.Main>
                   <Outlet />
               </AppShell.Main>

           </AppShell>
        </>
    )
}

//  <h1>page liste mes recettes</h1>