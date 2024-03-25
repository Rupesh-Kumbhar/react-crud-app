import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomeLayout></HomeLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {index: true, element: <Home></Home>},
      {path: "posts/:id", element: <PostDetails></PostDetails>},
      {path: "create", element: <CreatePost></CreatePost>},
      {path: "posts/:id/edit", element: <EditPost></EditPost> },
      {path: "delete", element: <DeletePost></DeletePost>}


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} ></RouterProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
