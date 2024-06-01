import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Home1 from "./pages/Home1";
import Create from "./pages/Create";
import Receive from "./pages/Receive";
import Copy from "./pages/Copy";
import QR from "pages/QR";
import React from "react";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "home1", element: <Home1 /> },
    { path: "create", element: <Create /> },
    { path: "receive", element: <Receive /> },
    { path: "copy", element: <Copy /> },
    { path: "qr", element: <QR /> },
  ]);

  return element;
};

export default ProjectRoutes;
