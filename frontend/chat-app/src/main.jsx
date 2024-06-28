import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import UserHome from './components/users/UserHome.jsx'
import EditProfile from './components/users/EditProfile.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>

<Route path="/" element={<App />}  />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />



<Route>
      <Route path ="/userhome" element={<UserHome/>}/>
      <Route path ="/editprofile" element={<EditProfile/>}/>


 </Route>

     

    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
