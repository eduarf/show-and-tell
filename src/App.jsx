import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import WhatsOn from "./pages/whats-on/WhatsOn";
import About from "./pages/about/About";
import { eventCities } from "../data";
import Location from "./pages/location/Location";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Footer from "./components/footer/Footer";

function App() {
  const Layout = () => {
    const location = useLocation();
    return (
      <>
        <Navbar />
        <Outlet />
        {location.pathname !== '/' ? <Footer /> : null}
      </>
    );
  };

  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
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
