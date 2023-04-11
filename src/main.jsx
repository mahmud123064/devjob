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
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin></Admin>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
         loader:() => fetch('/features.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path:"/details/:Id",
        element:<JobDetails></JobDetails>,
        loader: async({params}) => {
          const res = await fetch(`/features.json`)
          const data = await res.json()
          const abc = data.find (fd => fd.id == params.Id)
          return abc
        }
        
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
