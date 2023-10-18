import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import Details from './Components/Details';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Users from './Components/Users';
import Main from './Components/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-d2wbs3ji3-hasan-bin-alis-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/details/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-d2wbs3ji3-hasan-bin-alis-projects.vercel.app/coffee/${params.id}`),
        element: <Details></Details>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-d2wbs3ji3-hasan-bin-alis-projects.vercel.app/users')
    
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
