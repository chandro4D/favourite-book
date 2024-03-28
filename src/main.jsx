import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ErrorElement from './Components/ErrorElement/ErrorElement';
import YouShouldRead from './Components/YouShouldRead/YouShouldRead';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/YouShouldRead",
        element: <YouShouldRead></YouShouldRead>
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
