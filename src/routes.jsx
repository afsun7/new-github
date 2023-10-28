import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Main from "./components/main/Main";
import Profile from "./pages/profile/Profile";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user/:name",
        element: <Profile />,
      },
    ],
  },
]);
