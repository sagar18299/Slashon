import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));

const AboutUs = lazy(() => import( "../pages/AboutUs"));
const ContactUs = lazy(() => import( "../pages/ContactUs"));
const Project = lazy(() => import( "../pages/Project"));
const Services = lazy(() => import( "../pages/Services"))



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/aboutus',
        element: (
            <Suspense fallback={<div>Loading....</div>}>
              <AboutUs/>
            </Suspense>
          ),
       
    },
    {
        path: '/contactus',
        element: (
            <Suspense fallback={<div>Loading....</div>}>

        <ContactUs/>
        </Suspense>)
    },
    {
        path: '/projects',
        element: (
            <Suspense fallback={<div>Loading....</div>}>

        <Project/>
        </Suspense>
    )
    },
    
    {
        path: '/services',
        element: (
            <Suspense fallback={<div>Loading....</div>}>

        <Services/>
        </Suspense>
    )
    }

]);


export default router;

