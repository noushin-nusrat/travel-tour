import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Destination from "../Pages/Destination/Destination";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        // element: <Slider />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/destination",
        element: <Destination />
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);
