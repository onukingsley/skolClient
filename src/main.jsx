import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { RouterProvider} from 'react-router-dom'

import routes from "./routes";
import {ContextProvider, StateProvider} from "./contexts/ContextProvider";

createRoot(document.getElementById('root')).render(

    <StrictMode>
        <StateProvider>
            <RouterProvider router={routes}/>
        </StateProvider>

  </StrictMode>
)
