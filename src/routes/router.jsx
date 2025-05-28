import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/news",
        element: <h1>news</h1>,
    },
    {
       path: "auth",
        element: <h1>login</h1>,
    },
    {
        path: "*",
        element: <h1>error</h1>,
    }

]);

export default router;