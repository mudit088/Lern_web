import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signin from './Componnts/Signin.jsx'

const router= createBrowserRouter([
  {
   path :'/',
   element:<Layout/>,
   children:[
    {
      path: 'Signin',
      element:<Signin/>

   }
 
  ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
