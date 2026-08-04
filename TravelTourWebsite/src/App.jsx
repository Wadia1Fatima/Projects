import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "react-scroll-to-top";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><NavBar/><Home/><Footer/></>
  },
  {
    path:'/tours',
    element: <><NavBar/><Tours/><Footer/></>
  },
  {
    path:'/about',
    element: <><NavBar/><About/><Footer/></>
  },
  {
    path:'/contact',
    element: <><NavBar/><Contact/><Footer/></>
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <ScrollToTop color='white' smooth style={{backgroundColor:'#EF4444', display:'flex', alignItems:'center', justifyContent:'center'}}/>
    </>
  )
}

export default App