import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import WhatsOn from "./pages/whats-on/WhatsOn";
import About from "./pages/about/About";
import { eventCities, eventsItemsDetails } from "../data";
import Location from "./pages/location/Location";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Footer from "./components/footer/Footer";
import EventDetails from "./pages/event-detail/EventDetails";

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
        ...eventsItemsDetails.map((item) => ({
          path: `/events/${item.group.toLowerCase().replace(/\s+/g, '-')}-${item.date.split('.').reverse().join('-')}`,
          element: <EventDetails item={item} />,
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
