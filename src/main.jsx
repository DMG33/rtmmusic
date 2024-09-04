import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/cadastrar",
    element: <div>cadastrar musica!</div>,
  },

  {
    path: "/player",
    element: <div>adicionar musica!</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
