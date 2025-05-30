import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
              path: "/category/:id",
              element: <CategoryNews></CategoryNews>,
              loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: "/news",
        element: <h1>news</h1>,
    },
    {
       path: "auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>,
            },
            {
                path:"/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "*",
        element: <h1>error</h1>,
    }

]);

export default router;