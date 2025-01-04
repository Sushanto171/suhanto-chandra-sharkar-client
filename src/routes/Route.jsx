import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home/Home";
import Error from "../pages/errorPage/Error";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
