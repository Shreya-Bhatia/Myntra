import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn/signin';
import Home from './pages/Home/home';
import MainHome from './pages/Home/mainhome';
import Leaderboard from './pages/LeaderBoard/Lead';
import Accessories from './pages/Accessories/Accessory';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signin",
    element: <Home/>,
    children: [
      {
        path: "/signin",
        element: <SignIn/>,
      }
    ],
  },
  {
    path: "/home",
    element: <Home/>,
    children: [
      {
        path: "/home",
        element: <MainHome/>,
      }
    ],
  },
  {
    path: '/Lead', 
    element: <Leaderboard />,
  },
   {
    path: '/Accessory', 
    element: <Accessories />,
  },
  {
    path: "/home",
    element: <Home/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
