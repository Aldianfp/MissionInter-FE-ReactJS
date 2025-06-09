import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Beranda from "../pages/Beranda";
import ProtectedRoute from "./ProtectedRoute";

export let router = createBrowserRouter([
  {
    path: "/",
    // element: (
    //   <ProtectedRoute>
    //     <Beranda />
    //   </ProtectedRoute>
    // ),
    element: <Beranda />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
