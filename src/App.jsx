import Layout from './Pages/Layout/Layout.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Contact from './contact.jsx'
import ErrorPage from './Error.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Menu from './RestaurantMenu.jsx';
import { lazy,Suspense } from 'react';
import Shimmer from './shimmer.jsx';


const Grocery=lazy(()=>import('./Grocery.jsx'))
const router = createBrowserRouter([
    { path: "/", element: <Layout /> ,
    children:[
        { path: "/", element: <Body/> },
        { path: "/about", element: <About /> },
        {path:"/contact",element: <Contact />},
        {path:"/menu/:menuId",element:<Menu/>},
        {path:"/grocery",element:<Suspense fallback={<Shimmer/>}> <Grocery/></Suspense>},
      ],
    errorElement:<ErrorPage/>}
]);

function App(){
  return <RouterProvider router={router} />;
};

export default App
