import React from 'react';
import ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from './pages/Home';
import Finished from './pages/Finished';
import BooksProvider from './BookContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/finished",
    element: <Finished />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </ChakraProvider>
  </React.StrictMode>
);
