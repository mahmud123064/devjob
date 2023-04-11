import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Layout/Admin';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/statistics';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin></Admin>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path: "/",
       element:<Home></Home>,
      //  loader:() => fetch('/catagory.json'),
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>
      },
      {
      path:"/blog",
      element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
