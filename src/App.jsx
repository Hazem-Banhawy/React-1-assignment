import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
let routers=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}
  
  ]}
])
function App() {
  return (
   <>
   <RouterProvider router={routers}/>
   
   </>
  );
}

export default App;
