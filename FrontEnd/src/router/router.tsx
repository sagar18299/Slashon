import { Suspense, lazy } from "react";
import { createBrowserRouter  } from "react-router-dom";
import Demo from "../pages/Demo/Demo";
import CommanLayout from "../layout/CommanLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Project = lazy(() => import("../pages/Projects/Project"));
const Solution = lazy(() => import("../pages/Solution/Solution"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommanLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'demo',
        element: <Demo />
      },
      {
        path: 'aboutus',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AboutUs />
          </Suspense>
        )
      },
      {
        path: 'contactus',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContactUs />
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Project />
          </Suspense>
        )
      },
      {
        path: 'solutions',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Solution />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;