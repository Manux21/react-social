import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import './App.css'
import { createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";



function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div style={{display: 'flex'}}>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout/>,
      children: [

        {
          path:'/',
          element: <Home/>
        },

        {
          path:'/profile/:id',
          element: <Profile/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>,
    },

    {
      path: '/register',
      element: <Register/>,
    },

  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
