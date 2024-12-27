import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact us.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact us",
        element:<Contact/>
      },
      {
        path:"user/:userid",
        element:<User/>
      },
      {
        loader={githubInfoLoader} ,
        path:"/github",
        element:<Github/>
      }
    ]
  }
])

// const router = createBrowserRouter([
//   createRoutesFromElements(
//    < Route path="/" element={<Layout/>}>
//      < Route path="/about" element={<About/>}/>
//      < Route path="/home" element={<Home/>}/>
//      < Route path="/contact" element={<Contact/>}/>
//      < Route path="user/:userid" element={<User/>}/>
//    </Route>

//   )
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
