import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./Infrastructure/Router.tsx";
import './index.css'
import { MantineProvider } from "@mantine/core";
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider>
          <RouterProvider router={router} />
      </MantineProvider>
  </React.StrictMode>,
)
