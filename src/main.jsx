import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

import './index.css'
import ErrorPage from './error';
import Index from './routes/index';

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, {
  loader as editLoader,
  action as editAction,
} from './routes/edit';
import { action as destroyAction } from './routes/destroy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: editLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div> Uwuoops! There was an errur.</div>,
          },
        ],
      },
    ],
  },
]);

// // As JSX objects instead ->
// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root/>}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />} >
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//        <Route
//           path="contacts/:contactId/destroy"
//           action={destroyAction}
//         />
//       </Route>
//     </Route>
//   )
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
{/* <RouterProvider router={router} /> */ }