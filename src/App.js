import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
import UserContext from "../Context.js/userContext";
import { Provider } from "react-redux";
import store from "./utils/Redux/Store";
import Cart from "./components/Cart";


const About = lazy(() => import('./components/About'))

const AppLayout = () => {
  const [user,setUser] = useState({
    name :  'Amal T A' ,
    email : 'amalta@gmail.com'
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user : user ,
      setUser : setUser
    }} >
      <div style={{padding: "15px"}}>
        <Header />
        <Outlet />
        <Footer /> 
      </div>
  </UserContext.Provider>
  </Provider>
    )
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <Error />,
    _children: [
      {
        path: '/',
        element: <Body />,
      },

      {
        path: '/about',
        element: <Suspense fallback ={<Shimmer />}>
           <About />
        </Suspense>,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path : '/instaMart',
        element : <Instamart />
      },
      {
        path : '/cart' ,
        element : <Cart />
      }
    ],
    get children() {
      return this._children;
    },
    set children(value) {
      this._children = value;
    },
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
