import App from "@/App";
import Index from "@/pages";
import Login from "@/pages/login";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App accounts={[]} defaultLayout={undefined} navCollapsedSize={0} />
    ),
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
