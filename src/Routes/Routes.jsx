import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path : '/register',
          element: <Register></Register>
        },
        {
          path: '/secret',
          element: <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element: <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>,
      children: [
        // all users routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },
       

        // only admin routes
        {
          path: 'addItems',
          element: <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        },
        
        {
          path:'users',
          element: <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        }
      ]
    }
  ]);