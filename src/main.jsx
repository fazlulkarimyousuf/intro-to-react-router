import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptops from './components/Laptops/Laptops.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
    ]
  },
  {
    path: "about",
    element: <div>
      <h2>About me here</h2>
      </div>,
  },
  {
    path: "blogs",
    element: <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <h3>Oops! The page you’re looking for doesn’t exist.
      It might have been  moved, deleted, or never existed in the first place.</h3>
      <p>
🔍 Try going back to the [homepage] or check the URL for errors.
If you believe this is a mistake, [contact support].</p>
    </div>,
  
  },
  {
    path:"app",
    Component: App,
  },
  {
    path:"/app2",
    // element: <App></App>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
