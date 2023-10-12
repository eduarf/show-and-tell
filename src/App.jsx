import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import WhatsOn from "./pages/whats-on/WhatsOn";
import About from "./pages/about/About";
import { eventCities } from "../data";
import Location from "./pages/location/Location";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/events",
          element: <WhatsOn />,
        },
        {
          path: "/about",
          element: <About />,
        },
        ...eventCities.map((city) => ({
          path: `/events/${city.link}`,
          element: <Location city={city.city} />,
        })),
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div style={{ overflow: "hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
