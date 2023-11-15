import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App.tsx";
import { Home } from "./routes/Home.tsx";
import { Quarto } from "./routes/Quarto.tsx";
import { Sala } from "./routes/Sala.tsx";
import { Cozinha } from "./routes/Cozinha.tsx";
import { ErrorPage } from "./routes/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "quarto",
        element: <Quarto />,
      },
      {
        path: "sala",
        element: <Sala />,
      },
      {
        path: "cozinha",
        element: <Cozinha />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
