import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import ListPage from "./pages/listPage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Agents from "./pages/agents/Agents";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/agents", element: <Agents /> },
        { path: "/list", element: <ListPage /> },
        { path: "/list/:id", element: <SinglePage /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
