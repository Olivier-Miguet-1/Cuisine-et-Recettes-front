import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {router} from "./Infrastructure/Router.tsx";
import {createTheme, MantineProvider} from "@mantine/core";
import {RouterProvider} from "react-router-dom";

const theme = createTheme({
    primaryColor: "green",
    colors: {
        green: [
            "#DAF7E6",
            "#D6F6E3",
            "#D2F5E0",
            "#CDF4DD",
            "#ABEDC7",
            "#78E2A5",
            "#6DCD96",
            "#63BA88",
            "#5AA97C",
            "#529A71",
        ]
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider theme={theme}>
          <RouterProvider router={router} />
      </MantineProvider>
  </React.StrictMode>,
)
